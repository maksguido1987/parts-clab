import { ISuggestionItems } from "../store";

export const suggestionItemsFilter = (items: ISuggestionItems[], value?: string, parentId? :number, onlyByValue = false) => {  
  if (!items) {
    return [];
  }

  let result: ISuggestionItems[] = items;
  if (value) {
    result = result.filter((item) => item.conditions.some((v) => v.toLowerCase().includes(value.trim().toLowerCase())));
  } else {
    if (onlyByValue) {
      return [];
    }
  }
  if (parentId) {
    result = result.filter((item) => item.parentId === parentId);
  }
  return result;
}