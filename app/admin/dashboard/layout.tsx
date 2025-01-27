import Header from "../components/Header";

 
export default function  Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 
      <div
      
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
   <Header/>
        {children}
    
      </div>
 
  );
}
