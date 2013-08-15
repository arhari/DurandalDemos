define(['durandal/system'],
   function(system) {
      var logger = {
         logInfo: logInfo,
         logSuccess: logSuccess,
         logWarning: logWarning,
         logError: logError,
         logDebug: logDebug,
         log: log,
      };

      return logger;

      function logInfo(message, data, source, showToast) {
         log(message, data, source, showToast, 'info');
      }

      function logSuccess(message, data, source, showToast) {
         log(message, data, source, showToast, 'success');
      }

      function logWarning(message, data, source, showToast) {
         log(message, data, source, showToast, 'warning');
      }

      function logError(message, data, source, showToast) {
         log(message, data, source, showToast, 'error');
      }

      function logDebug(message, data, source) {
         log(message, data, source, system.debug(), 'info');
      }

      function log(message, data, source, showToast, type) {
         source = source ? '[' + source + '] ' : '';
         if (data) {
            system.log(source, message, data);
         } else {
            system.log(source, message);
         }

         if (showToast) {
            if (type === 'error') {
               toastr.error(message);
            } else if (type === 'warning') {
               toastr.warning(message);
            } else if (type === 'success') {
               toastr.success(message);
            } else {
               toastr.info(message);
            }
         }
      }
   });