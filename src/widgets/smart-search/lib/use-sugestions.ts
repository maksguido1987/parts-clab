import {useState, useEffect} from "react";
import {api} from "../../../shared/api";
import { useDebounce } from "../../../shared/lib";
import {useAppSelector} from "../../../shared/store";
import {ISearchSelected} from "../interfaces";
import {ISuggestionItems, ISuggestions} from "../store";
import {suggestionItemsFilter} from "./suggestion-items-filter";

export function useSuggestions(
    selected: ISearchSelected,
    value: string
): ISuggestions {
    const baseSuggestions = useAppSelector((state) => state.suggestions);
    const [loading, setLoading] = useState<boolean>(false);
    const [brand, setBrand] = useState<ISuggestionItems[]>([]);
    const [model, setModel] = useState<ISuggestionItems[]>([]);
    const [generation, setGeneration] = useState<ISuggestionItems[]>([]);
    const [modification, setModification] = useState<ISuggestionItems[]>([]);
    const [category, setCategory] = useState<ISuggestionItems[]>([]);
    const [vin, setVin] = useState<ISuggestionItems[]>([]);
    const [details, setDetails] = useState<ISuggestionItems[]>([]);

  const debounce = useDebounce(value, 1000);

    useEffect(() => {
        const {
            brand: selectedBrand,
            model: selectedModel,
            generation: selectedGeneration,
            modification: selectedModifications,
            category: selectedCategory,
            vin: selectedVin
        } = selected;

        if (selectedVin) {
            setVin([]);
            setLoading(true);
            api.get<ISuggestionItems[]>(`suggestions/category/vin/${selectedVin.id}`)
                .then(({ data }) => {
                    setCategory(data);
                })
                .catch((e) => {
                    console.log(e);
                })
                .finally(() => {
                    setLoading(false);
                })
        } else {
            if (selectedBrand) {
                setDetails([]);
                setVin([]);
                setBrand([]);
                setGeneration([]);
                setModification([]);
            } else {
                setBrand(suggestionItemsFilter(baseSuggestions.brand, value));
            }

            if (selectedModel) {
                setModel([]);
            } else {
                if (selectedBrand) {
                    setModel(suggestionItemsFilter(baseSuggestions.model, value, selectedBrand.id));
                } else {
                    const items = baseSuggestions.model.map((modelItem) => {
                        const brandItem = baseSuggestions?.brand.find(({ id }) => id === modelItem.parentId);
                        const conditions: string[] = [];
                        if (brandItem) {
                            conditions.push(`${brandItem.conditions[0]} - ${modelItem.conditions[0]}`)
                            brandItem.conditions.forEach((brandName) => {
                                modelItem.conditions.forEach((modelName) => {
                                    conditions.push(`${brandName} ${modelName}`);
                                })
                            })
                        }
                        return {
                            ...modelItem,
                            conditions: conditions.length ? conditions : modelItem.conditions,
                        };
                    })
                    setModel(suggestionItemsFilter(items, value, undefined, true));
                }
            }

            if (selectedGeneration) {
                setGeneration([]);
            } else {
                if (selectedModel) {
                    setGeneration(suggestionItemsFilter(baseSuggestions.generation, value, selectedModel.id));
                }
            }

            if (selectedModifications) {
                setModification([]);
            } else {
                if (selectedGeneration) {
                    setModification(suggestionItemsFilter(baseSuggestions.modification, value, selectedGeneration.id));
                }
            }

            if (selectedCategory) {
                setCategory([]);
            } else {
                if (selectedModifications) {
                    api.get<ISuggestionItems[]>(`suggestions/category/modification/${selectedModifications.id}`)
                        .then(({ data }) => {
                            setCategory(data);
                        })
                        .catch((e) => {
                            console.log(e);
                        })
                        .finally(() => {
                            setLoading(false);
                        });
                } else {
                    setCategory([]);
                }
            }

          if (debounce && debounce.trim()) {
                setLoading(true);
                setDetails([]);
                api.get<ISuggestions>(`suggestions/search/${debounce}`)
                    .then(({ data }) => {
                        if (data.vin.length) {
                            setVin(data.vin);
                            // setSuggestions({...suggestions, vin: data.vin});
                        }
                        if (data.details.length) {
                            setDetails(data.details);
                            // setSuggestions({...suggestions, details: data.details});
                        }
                        // setSuggestions({...suggestions});
                    })
                    .catch((e) => {
                        console.log(e);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            } else {
                setDetails([])
            }
            if (!value) {
                setDetails([]);
            }
        }

        return () => {}
    }, [selected, value, debounce, baseSuggestions]);

    return {
        loading,
        brand,
        model,
        generation,
        modification,
        category,
        vin,
        details,
    };
}
