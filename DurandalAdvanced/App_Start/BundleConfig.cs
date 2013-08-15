using System.Web.Optimization;

namespace DurandalAdvanced
{
   public class BundleConfig
   {
      public static void RegisterBundles(BundleCollection bundles)
      {
         bundles.Add(new StyleBundle("~/Content/css").Include(
            "~/Content/bootstrap.css",
            "~/Content/toastr.css",
            "~/Content/site.css",
            "~/Content/bootstrap-responsive.css"));

         bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
            "~/Scripts/modernizr-*"));

         bundles.Add(new ScriptBundle("~/bundles/scripts").Include(
            "~/Scripts/jquery-{version}.js",
            "~/scripts/amplify.js",
            "~/Scripts/bootstrap.js",
            "~/Scripts/knockout-{version}.js",
            "~/scripts/knockout.activity.js",
            "~/scripts/knockout.command.js",
            "~/scripts/knockout.dirtyFlag.js",
            "~/scripts/moment.js",
            "~/scripts/jquery.mockjson.js",
            "~/scripts/Q.js",
            "~/Scripts/sammy-{version}.js",
            "~/scripts/toastr.js",
            "~/scripts/underscore.js",
            "~/scripts/underscore.string.js"));
      }
   }
}