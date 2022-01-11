using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nasa.Images
{
  public class Cors
  {
    public static void ConfigureServices(IServiceCollection services)
    {
      services.AddCors(options =>
      {
        options.AddPolicy("AllowAllCors", builder =>
        {
          builder

          // .WithOrigins()
          .AllowAnyHeader()
          .AllowAnyMethod()
          .AllowCredentials()
          .SetIsOriginAllowedToAllowWildcardSubdomains()
          .SetIsOriginAllowed(delegate (string requestingOrigin)
          {
            return true;
          }).Build();
        });
      });

      

     
    }

#pragma warning disable IDE0060 // Remove unused parameter
    public static void Configure(IApplicationBuilder app, IWebHostEnvironment env)
#pragma warning restore IDE0060 // Remove unused parameter
    {
      app.UseCors("AllowAllCors");
    }
  }
}
