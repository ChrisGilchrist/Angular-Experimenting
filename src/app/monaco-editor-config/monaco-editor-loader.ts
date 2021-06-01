import { ɵa as BaseEditor } from 'ngx-monaco-editor';

let loadedMonaco = false;
let loadPromise: Promise<void>;
declare const require: any;

BaseEditor.prototype.ngAfterViewInit = function() {
  if (loadedMonaco) {
    // Wait until monaco editor is available
    loadPromise.then(() => {
      this.initMonaco(this._options);
    });
  } else {
    loadedMonaco = true;
    loadPromise = new Promise<void>((resolve: any) => {
      const baseUrl = this.config.baseUrl || './assets';
      if (typeof (<any>window).monaco === 'object') {
        resolve();
        return;
      }
      const onGotAmdLoader: any = () => {
        // Load monaco
        (<any>window).require.config({ paths: { vs: `${baseUrl}/` } });
        (<any>window).require(['vs/editor/editor.main'], () => {
          if (typeof this.config.onMonacoLoad === 'function') {
            this.config.onMonacoLoad();
          }
          this.initMonaco(this._options);
          resolve();
        });
      };

      // Load AMD loader if necessary
      if (!(<any>window).require) {
        const loaderScript: HTMLScriptElement = document.createElement('script');
        loaderScript.type = 'text/javascript';
        loaderScript.src = `${baseUrl}/monaco/vs/loader.js`;
        loaderScript.addEventListener('load', onGotAmdLoader);
        document.body.appendChild(loaderScript);
      } else {
        onGotAmdLoader();
      }
    });
  }
};
