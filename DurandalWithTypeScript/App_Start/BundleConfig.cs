using System.Web.Optimization;

namespace DurandalWithTypeScript
{
   public class BundleConfig
   {
      public static void RegisterBundles(BundleCollection bundles)
      {
         bundles.Add(new StyleBundle("~/Content/css").Include(
            "~/Content/bootstrap.css",
            "~/Content/site.css",
            "~/Content/bootstrap-responsive.css"));

         bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
            "~/Scripts/modernizr-*"));

         bundles.Add(new ScriptBundle("~/bundles/scripts").Include(
            "~/Scripts/jquery-{version}.js",
            "~/Scripts/bootstrap.js",
            "~/Scripts/knockout-{version}.js",
            "~/Scripts/sammy-{version}.js"));
      }
   }
}