export type MutationListeners<ResponseType> = {
  onSuccess?: (data: ResponseType) => void;
  onError?: (error: any) => void;
};
