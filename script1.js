     
            
            var x = 0;
            var y = 0;
            var res=0;

        
            document.getElementById("1").onclick = function()
            {   
                
                if(x==0)
                    {
                        document.getElementById("result").innerHTML = "1";
                        x=1;
                    }
                else
                    {
                        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"1";
                        x=x*10+1;
                    }
            }
            
            document.getElementById("2").onclick = function()
            {   
                if(x==0)
                    {
                        document.getElementById("result").innerHTML = "2";
                        x=2
                    }
                else
                    {
                        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"2";
                        x=x*10+2;
                    }
            }
            
            document.getElementById("3").onclick = function()
            {   
                if(x==0)
                    {
                        document.getElementById("result").innerHTML = "3";
                        x=3;
                    }
                else
                    {
                        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"3";
                        x=x*10+3;
                    }
            }
            
            document.getElementById("4").onclick = function()
            {   
                if(x==0)
                    {
                        document.getElementById("result").innerHTML = "4";
                        x=4;
                    }
                else
                    {
                        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"4";
                        x=x*10+4;
                    }
            }
            document.getElementById("5").onclick = function()
            {   
                if(x==0)
                {
                    document.getElementById("result").innerHTML = "5";
                    x=5;
                }
                else
                    {
                        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"5";
                        x=x*10+5;
                    }
            }
            document.getElementById("6").onclick = function()
            {   
                if(x==0)
                    {
                        document.getElementById("result").innerHTML = "6";
                        x=6;
                    }
                else
                    {
                        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"6";
                        x=x*10+6;
                    }
            }
            document.getElementById("7").onclick = function()
            {   
                
                if(x==0)
                {
                    document.getElementById("result").innerHTML = "7";
                    x=7;
                }
                else
                    {
                        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"7";
                        x=x*10+7;
                    }
            }
            document.getElementById("8").onclick = function()
            {   
                if(x==0)
                {
                    document.getElementById("result").innerHTML = "8";
                    x=8;
                }
                else
                    {
                        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"8";
                        x=x*10+8;
                    }
            }
            document.getElementById("9").onclick = function()
            {   
                if(x==0)
                {
                    document.getElementById("result").innerHTML = "9";
                    x=9;
                }
                else
                    {
                        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"9";
                        x=x*10+9;
                    }
            }
            document.getElementById("0").onclick = function()
            {   
                
                if(x==0)
                    document.getElementById("result").innerHTML = "0";
                else
                    {
                        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"0";
                        x=x*10+0;
                    }
            }
            
            //-------------------------------Addition---------------------------
            
            document.getElementById("+").onclick = function()
            {
                document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+" + ";
                document.getElementById("1").onclick = function()
                {   
                
                     document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"1";
                    y=y*10+1;
                 }
            
                document.getElementById("2").onclick = function()
                {   
                
                      document.getElementById("result").innerHTML =document.getElementById("result").innerHTML+"2";
                      y=y*10+2;
                }
            
                document.getElementById("3").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"3";
                    y=y*10+3;
                }
            
                document.getElementById("4").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"4";
                    y=y*10+4;
                }
                document.getElementById("5").onclick = function()
                {      
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"5";
                    y=y*10+5;
                }
                document.getElementById("6").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"6";
                    y=y*10+6;
                }
                document.getElementById("7").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"7";
                    y=y*10+7;
                }
                document.getElementById("8").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"8";
                    y=y*10+8;
                }
                document.getElementById("9").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"9";
                    y=y*10+9;
                }
                document.getElementById("0").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"0";
                    y=y*10+0;
                }
            
                document.getElementById("=").onclick = function()
                {
                    res = x + y;
                    document.getElementById("result").innerHTML = res;
                    x=res;
                    y=0;
                }
                
            }
            
            
            
            
            //--------------Subtraction----------------------
            
            
            document.getElementById("-").onclick = function()
            {
                document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+" - ";
                document.getElementById("1").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"1";
                    y=y*10+1;
                }
            
                document.getElementById("2").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML =document.getElementById("result").innerHTML+"2";
                    y=y*10+2;
                }
            
                document.getElementById("3").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"3";
                    y=y*10+3;
                }
            
                document.getElementById("4").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"4";
                    y=y*10+4;
                }

                document.getElementById("5").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"5";
                    y=y*10+5;
                }

                document.getElementById("6").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"6";
                    y=y*10+6;
                }

                document.getElementById("7").onclick = function()
                {      
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"7";
                    y=y*10+7;
                }

                document.getElementById("8").onclick = function()
                {      
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"8";
                    y=y*10+8;
                }

                document.getElementById("9").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"9";
                    y=y*10+9;
                }

                document.getElementById("0").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"0";
                    y=y*10+0;
                }
            
                document.getElementById("=").onclick = function()
                {
                    res = x - y;
                    document.getElementById("result").innerHTML = res;
                    x=res;
                    y=0;
                }
                
            }
            
            
            //---------------Multiply--------------
            
            document.getElementById("x").onclick = function()
            {
                document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+" x ";
                document.getElementById("1").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"1";
                    y=y*10+1;
                }
            
                document.getElementById("2").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML =document.getElementById("result").innerHTML+"2";
                    y=y*10+2;
                }
            
                document.getElementById("3").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"3";
                    y=y*10+3;
                }
            
                document.getElementById("4").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"4";
                    y=y*10+4;
                }

                document.getElementById("5").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"5";
                    y=y*10+5;
                }

                document.getElementById("6").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"6";
                    y=y*10+6;
                }
            
                document.getElementById("7").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"7";
                    y=y*10+7;
                }

                document.getElementById("8").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"8";
                    y=y*10+8;
                }
            
                document.getElementById("9").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"9";
                    y=y*10+9;
                }
            
                document.getElementById("0").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"0";
                    y=y*10+0;
                }
            
            
                document.getElementById("=").onclick = function()
                {
                    res = x * y;
                    document.getElementById("result").innerHTML = res;
                    x=res;
                    y=0;
                }
                
            }
            
            
            //-------------------------------Division------------------------------
            
            document.getElementById("/").onclick = function()
            {
                document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+" / ";
                
                document.getElementById("1").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"1";
                    y=y*10+1;
                }
            
                document.getElementById("2").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML =document.getElementById("result").innerHTML+"2";
                    y=y*10+2;
                }
            
                document.getElementById("3").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"3";
                    y=y*10+3;
                }
            
                document.getElementById("4").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"4";
                    y=y*10+4;
                }

                document.getElementById("5").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"5";
                    y=y*10+5;
                }
            
                document.getElementById("6").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"6";
                    y=y*10+6;
                }
            
                document.getElementById("7").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"7";
                    y=y*10+7;
                }
            
                document.getElementById("8").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"8";
                    y=y*10+8;
                }
            
                document.getElementById("9").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"9";
                    y=y*10+9;
                }
            
                document.getElementById("0").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"0";
                    y=y*10+0;
                }
            
                document.getElementById("=").onclick = function()
                {
                    res = x / y;
                    document.getElementById("result").innerHTML = res;
                    x=res;
                    y=0;
                }
                
            }
            
            
            //---------------------Remainder----------------------
            
            document.getElementById("%").onclick = function()
            {
                document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+" % ";
                
                document.getElementById("1").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"1";
                    y=y*10+1;
                }
            
                document.getElementById("2").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML =document.getElementById("result").innerHTML+"2";
                    y=y*10+2;
                }
            
                document.getElementById("3").onclick = function()
                {      
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"3";
                    y=y*10+3;
                }
            
                document.getElementById("4").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"4";
                    y=y*10+4;
                }
            
                document.getElementById("5").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"5";
                    y=y*10+5;
                }
            
                document.getElementById("6").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"6";
                    y=y*10+6;
                }
                
                document.getElementById("7").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"7";
                    y=y*10+7;
                }

                document.getElementById("8").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"8";
                    y=y*10+8;
                }
            
                document.getElementById("9").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"9";
                    y=y*10+9;
                }
            
                document.getElementById("0").onclick = function()
                {   
                
                    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+"0";
                    y=y*10+0;
                }
            
                document.getElementById("=").onclick = function()
                {
                    res = x % y;
                    document.getElementById("result").innerHTML = res;
                    x=res;
                    y=0;
             
                }

                      
            }

//--------------------------------------------------END---------------------------------------------------------------

    //--------------------Clear----------------------

    document.getElementById("Clear").onclick = function()
    {
        document.getElementById("result").innerHTML = 0;

        window.location.reload();    
    }

    document.getElementById("C").onclick = function()
    {
        document.getElementById("result").innerHTML = 0;

        window.location.reload();    
    }


            
            
            
            
            
            
            
            
            
    