export interface IDevCardPopover {
  id: string | undefined;
  card: boolean;
  anchor: HTMLButtonElement | null;
  handleClose: () => void;
  devMore: string;
}
