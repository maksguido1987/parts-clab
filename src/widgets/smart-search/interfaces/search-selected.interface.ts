import { ISearchSelectValue } from "./search-select-value.interface";

export interface ISearchSelected {  
  brand?: ISearchSelectValue;
  model?: ISearchSelectValue;
  generation?: ISearchSelectValue;
  modification?: ISearchSelectValue;
  category?: ISearchSelectValue;  
  vin?: ISearchSelectValue;
}
