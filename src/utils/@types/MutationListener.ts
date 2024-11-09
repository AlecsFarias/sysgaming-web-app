export type MutationListener<ResponseType> = {
  onSuccess?: (data: ResponseType) => void;
  onError?: (error: any) => void;
};
