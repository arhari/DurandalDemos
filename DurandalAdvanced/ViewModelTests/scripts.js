(function() {
   function writeScriptTag(src, attrs) {
      var output = '<script src="' + src + '" type="text/javascript"';
      if (attrs) {
         for (var a in attrs) {
            output += ' ' + a + '="' + attrs[a] + '"';
         }
      }
      output += '></script>';

      document.write(output);
   }

   var entryScript;
   var scripts = document.getElementsByTagName('script');
   for (var i = scripts.length - 1; i >= 0; i--) {
      var script = scripts[i];
      var main = script.getAttribute('data-main');
      if (main && main.length > 0) {
         entryScript = main;
         break;
      }
   }

   var rootPath = '../../../../';

   writeScriptTag(rootPath + 'scripts/jquery-2.0.3.js');
   writeScriptTag(rootPath + 'scripts/amplify.js');
   writeScriptTag(rootPath + 'scripts/bootstrap.js');
   writeScriptTag(rootPath + 'scripts/knockout-2.3.0.debug.js');
   writeScriptTag(rootPath + 'scripts/knockout.activity.js');
   writeScriptTag(rootPath + 'scripts/knockout.command.js');
   writeScriptTag(rootPath + 'scripts/knockout.dirtyFlag.js');
   writeScriptTag(rootPath + 'scripts/moment.js');
   writeScriptTag(rootPath + 'scripts/jquery.mockjson.js');
   writeScriptTag(rootPath + 'scripts/Q.js');
   writeScriptTag(rootPath + 'scripts/sammy-0.7.4.js');
   writeScriptTag(rootPath + 'scripts/toastr.js');
   writeScriptTag(rootPath + 'scripts/underscore.js');
   writeScriptTag(rootPath + 'scripts/underscore.string.js');
   writeScriptTag(rootPath + 'scripts/qunit.js');

   if (entryScript) {
      writeScriptTag(rootPath + 'Areas/durandal/amd/require.js', { 'data-main': entryScript });
      //document.write('<script>define(\'pageConfig\', {});</script>');
   }
})();
