
export const MAIN_ERROR = 'Operation failed.';
export const INPUT_ERROR = 'Invalid input';

export const getError = (error) => {
    if (error.message === INPUT_ERROR) {
        throw error;
    }
  
    throw new Error(MAIN_ERROR);
};