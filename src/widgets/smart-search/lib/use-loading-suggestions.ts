/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../shared/store';
import {
  loadBaseSuggestions,
  loadGenerationSuggestions,
  loadModificationSuggestions,
  setLoadingState,
} from '../store';
import { EToastType, showNotice } from '../../../shared/lib';

/** Dispatch данных в store */
export const useLoadSuggestions = () => {
  const { brand, model, category, generation, modification, loading } = useAppSelector(
    (state) => state.suggestions
  );
  const dispatch = useAppDispatch();

  /** Подгружаем базовые подсказки (brand, model, category) только если их нет в store */
  useEffect(() => {
    if (!brand.length || !model.length || !category.length) {
      dispatch(loadBaseSuggestions())
        .unwrap()
        .then(() => {
          dispatch(setLoadingState(false));
        })
        .catch(() => {
          dispatch(setLoadingState(false));
          showNotice(EToastType.error, 'Ошибка в загрузке базовых подсказок');
        });
    } else {
      dispatch(setLoadingState(false));
    }
  }, [dispatch]);

  /** Затем остальные, только если их нет в store */
  useEffect(() => {
    if (!loading) {
      !generation.length &&
        dispatch(loadGenerationSuggestions())
          .unwrap()
          .catch(() => {
            showNotice(
              EToastType.error,
              'Ошибка в загрузке подсказок поколений автомобилей'
            );
          });
      !modification.length &&
        dispatch(loadModificationSuggestions())
          .unwrap()
          .catch(() => {
            showNotice(
              EToastType.error,
              'Ошибка в загрузке подсказок двигателей автомобилей'
            );
          });
    }
  }, [loading, dispatch]);

  return loading;
};
