import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import TwitterProvider from 'next-auth/providers/twitter'
import EmailProvider from 'next-auth/providers/email'
import GithubProvider from 'next-auth/providers/github'


const options = {
          providers: [ GithubProvider({clientId: process.env.GITHUB_ID , clientSecret: process.env.GITHUB_SECRET}),
                       TwitterProvider({clientId: process.env.TWITTER_ID, clientSecret: process.env.TWITTER_SECRET}),
                    //    Providers.Email({    server:{
                    //                               host:"",
                    //                               port:"",
                    //                               auth:{user:"",pass:""}
                    //                               },
                    //                          form :"", 
                    //                     }),
                                         
          ]
};

export default (req,res) => NextAuth(req,res,options);