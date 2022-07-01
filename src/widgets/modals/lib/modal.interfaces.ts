export interface IModalProps {
  isShow: boolean;
  setShowModal: () => void;
}

export interface ICityModalProps extends IModalProps {
  currentCity: string | undefined;
  onSetNewCity: (value: string) => void;
}