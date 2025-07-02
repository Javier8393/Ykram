declare const grecaptcha: {
    execute(siteKey: string, options: { action: string }): Promise<string>;
  };
  
declare global {
    interface Window {
        _mosaicMinCellWidth: number;
        _mosaicMinCellHeight: number;
    }
}
  