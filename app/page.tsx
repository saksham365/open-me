"use client";

import { useState } from "react";
import { ThemeCard } from "@/components/ThemeCard";
import { OpenWhenModal } from "@/components/OpenWhenModal";
import { Heart, Moon, CloudRain, Flame, Sun } from "lucide-react";

const cards = [
  {
    id: "miss-me",
    title: "Open when you miss me",
    icon: Heart,
    bgClass: "bg-rose-100 hover:bg-rose-200",
    textClass: "text-rose-900",
    modalTheme: "bg-rose-500",
    content: (
      <>
        <p>you know if we are far away from each other by distance or by time or we both are busy and time and situations keep us far and you are missing me you can read this, each and every second of my life since i have been with you, you have been in my mind, i just am so in love with you and even when i am not with you i love you so much and my whole whole mind and everything is for you only and i'll always try to surround you with things which remind me of you if you are missing me you can see stich being in your room, thats me with youu all the time, i want to be with youu always and forever, if you miss me ill always try to come and be there with you even if i am not there i have you with me on my wrist, always my baby, when you miss me so much listen to songs which i love, listen to playlists i made for you, listen to chiquitita, our song, and when i miss you and you are not with me i tend to play with the hairband you gave me and i watch out pictures, and the candies you gave me on our first date, i keep them in my bag coz they remind me of our first date, well idk in which way your remeber our first date, but to me it was pretty pretty awesome and cute, youu looked really hot that day and going to mandir and gurudwara both and aftwerwards that auto rickshaw ride, i can never forget that day and it was so awesome, well this was supposed to be "when you miss me" but idk what i am saying guess i am not a writer aahh, but yeah, when you miss me just look around and you'll find me in some way or form, if its a rainy day i am the rain, if its a sunny day, i am that ray of sunlight, if its night, guess i am that peace that you find at nights and idk i just want to be wit you all the time and even if i am not there, i am there and i love you forever.</p>
      </>
    ),
  },
  {
    id: "cant-sleep",
    title: "Open when you can’t sleep",
    icon: Moon,
    bgClass: "bg-blue-100 hover:bg-blue-200",
    textClass: "text-blue-900",
    modalTheme: "bg-blue-600",
    content: (
      <>
        <p>i know i am very sotdu and i tend to sleep way earlier than you and because of this it happens a lot that you have to sleep akele and me so rkha hota hu tumse pehle and i am sorry for that and when you are maybe scared or overthinking and you just cant sleep just know that when i am sleeping i sleep so oeacefullu knowing that i have youu and knowing that we both love each other and its so beautiful and so awesome that you love an idiot like me, and istg if i could dream i'll always just dream about you, dream about the life i want with youuu and i want that peace withiin you as well, i know sme days gets rough and its not the same cutesy love and we both may argue and i'll never let you go into nights without making you feel that peace and you should know that i loveee you so much and i love youuu more and more each passing day, and when you cant sleep, if you are in delhi hold onto anything that reminds you of me and i am there with you and i'll be on calls always so feel closer with me, i feel so peace when i sleep on calls and the days when calls/meets are still ongoing when i wake up, the best feeling aah, i'll always be there when you wake up in the mornings baby, nights will pass and you'll find me there with you always.</p>
      </>
    ),
  },
  {
    id: "doubting",
    title: "Open when you’re doubting yourself",
    icon: CloudRain,
    bgClass: "bg-yellow-100 hover:bg-yellow-200",
    textClass: "text-yellow-900",
    modalTheme: "bg-yellow-500",
    content: (
      <>
        <p>i will always be your biggest cheerleader, i want the best for youu pankhuri, you are the most beautiful soul and the most strongest person i know, you motivate me so much by just existing, you take care of yourself and the people around you so ache se and the way you are so emphatic, its very beautiful and its so important and i can never be like that, and you are kind of person which get things done, like its hard to explain but if you have somthing in mind it gets executed so ache se and you dont procastinate, you plan and you do those things and its so motivating and you are so mindful and like you sort things out which is such an important thing in life, keeping things and your life organised, and i am so suree that you'll achieve so much in your life, you are destined to, i am so sure and you'll find me by your side when you are working for your goals and when you achieve them i am so proud of the woman you are, like you are younger than me but you always amaze me by how mature and smart you are and i loveee my baby girl and when you feel like you cant do it and its getting to hard just know that you have atleast one human in this world who completely believes in you and your capabilities, you can do anything and everything pankhuri, i will always cheer for you and support youu, YOU WILL MAKE YOUR FAMILY SO SO PROUD YOU ALREADY DO</p>
      </>
    )
  },
  {
    id: "angry",
    title: "Open when you’re angry at me",
    icon: Flame,
    bgClass: "bg-red-100 hover:bg-red-200",
    textClass: "text-red-900",
    modalTheme: "bg-red-500",
    content: (
      <>
        <p>i am sorry for whatever i did, i probably didnt mean to do it or i regret it very much and i feel very sorry for it, pta hai science kehti hai ki agar aap angry raho zyada time toh apki skin deage hone lagti hai and you look older than you actually are, hawwww you dont want that right ?? chalo chalo jaldi se maaf krdo saksham ko ab, i am really sorry for this unfunny joke, but i love youuu very much and you must be feeling very angry but you must know ki i do love youu more than i can ever love me so i'll always reach out and ill try to make things better and i am really sorrry for being such an idiot which i am some of the times, please if you can please forgive this idiot you can take your time jitna tumhe lage until you feel better but please always just know that i loveee you so much and i want you and only youuu forever.</p>
      </>
    )
  },
  {
    id: "happy",
    title: "Open when you’re happy",
    icon: Sun,
    bgClass: "bg-pink-100 hover:bg-pink-200",
    textClass: "text-pink-900",
    modalTheme: "bg-pink-500",
    content: (
      <>
        <p>you should always be happy, I LOVEEE YOUUU SO MUCHHH BABYY 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿  🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿 🧿</p>
      </>
    )
  }
];

export default function Home() {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const selectedCard = cards.find((c) => c.id === selectedCardId);

  return (
    <main className="min-h-screen p-4 md:p-12 flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-100 via-rose-50 to-white overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-rose-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="w-full max-w-[1600px] z-10">
        <header className="text-center mb-12 md:mb-20">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-rose-600 mb-6 drop-shadow-sm animate-fade-in-down">
            Open When...
          </h1>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-2 place-items-center">
          {cards.map((card, index) => (
            <div key={card.id} className="w-full max-w-[300px] lg:max-w-none">
              <ThemeCard
                title={card.title}
                icon={card.icon}
                bgClass={card.bgClass}
                textClass={card.textClass}
                onClick={() => setSelectedCardId(card.id)}
                index={index}
              />
            </div>
          ))}
        </div>

        <OpenWhenModal
          isOpen={!!selectedCard}
          onClose={() => setSelectedCardId(null)}
          title={selectedCard?.title || ""}
          themeColor={selectedCard?.modalTheme || "bg-gray-500"}
        >
          {selectedCard?.content}
        </OpenWhenModal>
      </div>

      <footer className="mt-16 text-center text-rose-900/30 text-sm z-10">
        Happy Valentine's Day!
      </footer>
    </main>
  );
}
