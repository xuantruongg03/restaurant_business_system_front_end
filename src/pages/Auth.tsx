
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, LogIn, UserPlus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import useRegister from '@/hooks/use-register';
import useLogin from '@/hooks/use-login';
// Define schemas for form validation
const loginSchema = z.object({
  username: z.string().min(2, { message: "Tên tài khoản phải có ít nhất 5 ký tự" }),
  password: z.string().min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" }),
});

const registerSchema = z.object({
  name: z.string().min(2, { message: "Tên phải có ít nhất 5 ký tự" }),
  username: z.string().min(2, { message: "Tên tài khoản phải có ít nhất 5 ký tự" }),
  phone: z.string().regex(/^\d+$/, { message: "Số điện thoại phải là số" }).refine((value) => value.length === 10, { message: "Số điện thoại phải có 10 ký tự số" }),
  password: z.string().min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự, bao gồm chữ hoa, số và ký tự đặc biệt" }),
})

const Auth = () => {
  const navigate = useNavigate();
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const { register, isPending: registerPending, error: registerError } = useRegister();
  const { login, isPending: loginPending, error: loginError } = useLogin();

  // Login form
  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Register form
  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      username: "",
      phone: "",
      password: "",
    },
  });

  const onLoginSubmit = async (values: z.infer<typeof loginSchema>) => {
    login({username: values.username, password: values.password}).then((res) => {
      localStorage.setItem("token", res.result.token);
      toast({
        title: "Đăng nhập thành công",
        description: "Chào mừng bạn quay trở lại",
      });
      
      navigate('/');
    }); 
  };

  const onRegisterSubmit = (values: z.infer<typeof registerSchema>) => {
    register({username: values.username, password: values.password, name: values.name, phone: values.phone}).then((res) => {
      toast({
        title: "Đăng ký thành công",
        description: "Tài khoản của bạn đã được tạo",
      });
      navigate('/auth');
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login" className="text-base py-3">Đăng nhập</TabsTrigger>
              <TabsTrigger value="register" className="text-base py-3">Đăng ký</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 text-center">Đăng nhập</h2>
                <Form {...loginForm}>
                  <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
                    <FormField
                      control={loginForm.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tên tài khoản</FormLabel>
                          <FormControl>
                            <Input placeholder="username1" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={loginForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mật khẩu</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input 
                                type={showLoginPassword ? "text" : "password"} 
                                placeholder="******" 
                                {...field} 
                              />
                              <button 
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                onClick={() => setShowLoginPassword(!showLoginPassword)}
                              >
                                {showLoginPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                              </button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="text-right">
                      <a href="#" className="text-sm text-orange hover:underline">Quên mật khẩu?</a>
                    </div>
                    <Button type="submit" className="w-full bg-orange hover:bg-orange-light">
                      <LogIn className="mr-2 h-4 w-4" /> Đăng nhập
                    </Button>
                  </form>
                </Form>
              </div>
            </TabsContent>
            
            <TabsContent value="register">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 text-center">Đăng ký</h2>
                <Form {...registerForm}>
                  <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-4">
                    <FormField
                      control={registerForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Họ tên</FormLabel>
                          <FormControl>
                            <Input placeholder="Nguyen Van A" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={registerForm.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tên tài khoản</FormLabel>
                          <FormControl>
                            <Input placeholder="username1" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={registerForm.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Số điện thoại</FormLabel>
                          <FormControl>
                            <Input placeholder="0909090909" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={registerForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mật khẩu</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input 
                                type={showRegisterPassword ? "text" : "password"} 
                                placeholder="******" 
                                {...field} 
                              />
                              <button 
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                              >
                                {showRegisterPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                              </button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full bg-orange hover:bg-orange-light">
                      <UserPlus className="mr-2 h-4 w-4" /> Đăng ký
                    </Button>
                  </form>
                </Form>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Auth;
