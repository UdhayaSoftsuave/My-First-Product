Interceptor -> It is like AOP , filter in spring boot , It will work every request send.

providers: [ProductService , 
    {provide : HTTP_INTERCEPTORS , useClass : LoggingInterceptor , multi : true},
    {provide : HTTP_INTERCEPTORS , useClass : AppInterceptor , multi : true},
    
  ],

  LoggingInterceptor -> will execute first.
  AppInterceptor -> will execute second.