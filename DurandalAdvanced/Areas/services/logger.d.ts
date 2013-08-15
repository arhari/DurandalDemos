declare module 'services/logger' {
   export var logInfo: (message: string, data: any, source: string, showToast: boolean) => void;
   export var logSuccess: (message: string, data: any, source: string, showToast: boolean) => void;
   export var logWarning: (message: string, data: any, source: string, showToast: boolean) => void;
   export var logError: (message: string, data: any, source: string, showToast: boolean) => void;
   export var logDebug: (message: string, data: any, source: string) => void;
   export var log: (message: string, data: any, source: string, showToast: boolean, type: string) => void;
}
