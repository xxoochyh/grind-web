//package com.example.demo.config;
//
//
//import com.example.demo.component.MylocaleResolver;
//import com.example.demo.controller.LoginHandlerInterceptor;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.LocaleResolver;
//import org.springframework.web.servlet.config.annotation.*;
//
//@Configuration
//public class MyMvcConfig implements WebMvcConfigurer {
////    @Override
////    public void addViewControllers(ViewControllerRegistry registry) {
////        //super.addViewControllers(registry);
////        registry.addViewController("/atguigu").setViewName("success");
////    }
//
//    @Bean
//    public WebMvcConfigurer webMvcConfigurerAdapter() {
//        WebMvcConfigurer adapter = new WebMvcConfigurer() {
//            @Override
//            public void addViewControllers(ViewControllerRegistry registry) {
//                registry.addViewController("/").setViewName("login");
//                registry.addViewController("/index.html").setViewName("login");
//                registry.addViewController("/main.html").setViewName("dashboard");
////                registry.addViewController("/success").setViewName("success");
//            }
//
////            //注册拦截器
////            @Override
////            public void addInterceptors(InterceptorRegistry registry) {
//////                super.addInterceptors(registry);
////                registry.addInterceptor(new LoginHandlerInterceptor()).addPathPatterns("/**")
////                        .excludePathPatterns("/index.html", "/", "/user/login");
////            }
//        };
//        return adapter;
//    }
//
//    @Bean
//    public LocaleResolver localeResolver() {
//        return new MylocaleResolver();
//    }
//
//}
