exports.id=530,exports.ids=[530],exports.modules={502:(e,t,o)=>{Promise.resolve().then(o.t.bind(o,2994,23)),Promise.resolve().then(o.t.bind(o,6114,23)),Promise.resolve().then(o.t.bind(o,9727,23)),Promise.resolve().then(o.t.bind(o,9671,23)),Promise.resolve().then(o.t.bind(o,1868,23)),Promise.resolve().then(o.t.bind(o,4759,23))},6989:(e,t,o)=>{Promise.resolve().then(o.t.bind(o,9404,23)),Promise.resolve().then(o.bind(o,4057)),Promise.resolve().then(o.bind(o,5909)),Promise.resolve().then(o.bind(o,1062)),Promise.resolve().then(o.bind(o,8062)),Promise.resolve().then(o.bind(o,2631))},4057:(e,t,o)=>{"use strict";o.d(t,{Dock:()=>g,DockIcon:()=>f});var r=o(326),i=o(1223),s=o(8671),n=o(3519),a=o(9063),l=o(7290),c=o(2877),d=o(7577),u=o.n(d);let h=60,p=140,m=(0,s.j)("mx-auto w-max h-full p-2 flex items-end rounded-full border"),g=u().forwardRef(({className:e,children:t,magnification:o=h,distance:s=p,...l},c)=>{let d=(0,n.c)(1/0);return r.jsx(a.E.div,{ref:c,onMouseMove:e=>d.set(e.pageX),onMouseLeave:()=>d.set(1/0),...l,className:(0,i.cn)(m({className:e})),children:u().Children.map(t,e=>u().isValidElement(e)?u().cloneElement(e,{mousex:d,magnification:o,distance:s}):e)})});g.displayName="Dock";let f=({size:e,magnification:t=h,distance:o=p,mousex:s,className:n,children:u,...m})=>{let g=(0,d.useRef)(null),f=(0,l.H)(s,e=>{let t=g.current?.getBoundingClientRect()??{x:0,width:0};return e-t.x-t.width/2}),x=(0,l.H)(f,[-o,0,o],[40,t,40]),b=(0,c.q)(x,{mass:.1,stiffness:150,damping:12});return r.jsx(a.E.div,{ref:g,style:{width:b},className:(0,i.cn)("flex aspect-square cursor-pointer items-center justify-center rounded-full",n),...m,children:u})};f.displayName="DockIcon"},5909:(e,t,o)=>{"use strict";o.d(t,{ModeToggle:()=>h});var r=o(326),i=o(4214),s=o(8671),n=o(7577),a=o(1223);let l=(0,s.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9 rounded-full"}},defaultVariants:{variant:"default",size:"default"}}),c=n.forwardRef(({className:e,variant:t,size:o,asChild:s=!1,...n},c)=>{let d=s?i.g7:"button";return r.jsx(d,{className:(0,a.cn)(l({variant:t,size:o,className:e})),ref:c,...n})});c.displayName="Button";var d=o(6812),u=o(4831);function h(){let{theme:e,setTheme:t}=(0,u.F)();return(0,r.jsxs)(c,{variant:"ghost",type:"button",size:"icon",className:"px-2",onClick:()=>t("dark"===e?"light":"dark"),children:[r.jsx(d.NWY,{className:"h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200"}),r.jsx(d.kLh,{className:"hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200"})]})}},1062:(e,t,o)=>{"use strict";o.d(t,{ThemeProvider:()=>s});var r=o(326),i=o(4831);function s({children:e,...t}){return r.jsx(i.f,{...t,children:e})}},8062:(e,t,o)=>{"use strict";o.d(t,{Separator:()=>a});var r=o(326),i=o(7577),s=o(220),n=o(1223);let a=i.forwardRef(({className:e,orientation:t="horizontal",decorative:o=!0,...i},a)=>r.jsx(s.f,{ref:a,decorative:o,orientation:t,className:(0,n.cn)("shrink-0 bg-border","horizontal"===t?"h-[1px] w-full":"h-full w-[1px]",e),...i}));a.displayName=s.f.displayName},2631:(e,t,o)=>{"use strict";o.r(t),o.d(t,{Tooltip:()=>l,TooltipContent:()=>d,TooltipProvider:()=>a,TooltipTrigger:()=>c});var r=o(326),i=o(14),s=o(7577),n=o(1223);let a=i.zt,l=i.fC,c=i.xz,d=s.forwardRef(({className:e,sideOffset:t=4,...o},s)=>r.jsx(i.VY,{ref:s,sideOffset:t,className:(0,n.cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...o}));d.displayName=i.VY.displayName},1223:(e,t,o)=>{"use strict";o.d(t,{cn:()=>s});var r=o(1135),i=o(1009);function s(...e){return(0,i.m6)((0,r.W)(e))}},5498:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>V,metadata:()=>W});var r=o(9510),i=o(9825),s=o.n(i),n=o(8570);let a=(0,n.createProxy)(String.raw`C:\Users\Hitesh\git-hub-projects\portfolio\src\components\magicui\dock.tsx`),{__esModule:l,$$typeof:c}=a;a.default;let d=(0,n.createProxy)(String.raw`C:\Users\Hitesh\git-hub-projects\portfolio\src\components\magicui\dock.tsx#Dock`),u=(0,n.createProxy)(String.raw`C:\Users\Hitesh\git-hub-projects\portfolio\src\components\magicui\dock.tsx#DockIcon`);(0,n.createProxy)(String.raw`C:\Users\Hitesh\git-hub-projects\portfolio\src\components\magicui\dock.tsx#dockVariants`);let h=(0,n.createProxy)(String.raw`C:\Users\Hitesh\git-hub-projects\portfolio\src\components\mode-toggle.tsx`),{__esModule:p,$$typeof:m}=h;h.default;let g=(0,n.createProxy)(String.raw`C:\Users\Hitesh\git-hub-projects\portfolio\src\components\mode-toggle.tsx#ModeToggle`);var f=o(3025),x=o(791),b=o(1159),v=o(644);let w=(0,x.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9 rounded-full"}},defaultVariants:{variant:"default",size:"default"}});b.forwardRef(({className:e,variant:t,size:o,asChild:i=!1,...s},n)=>{let a=i?f.g7:"button";return r.jsx(a,{className:(0,v.cn)(w({variant:t,size:o,className:e})),ref:n,...s})}).displayName="Button";let y=(0,n.createProxy)(String.raw`C:\Users\Hitesh\git-hub-projects\portfolio\src\components\ui\separator.tsx`),{__esModule:j,$$typeof:k}=y;y.default;let N=(0,n.createProxy)(String.raw`C:\Users\Hitesh\git-hub-projects\portfolio\src\components\ui\separator.tsx#Separator`),C=(0,n.createProxy)(String.raw`C:\Users\Hitesh\git-hub-projects\portfolio\src\components\ui\tooltip.tsx`),{__esModule:P,$$typeof:z}=C;C.default;let S=(0,n.createProxy)(String.raw`C:\Users\Hitesh\git-hub-projects\portfolio\src\components\ui\tooltip.tsx#Tooltip`),D=(0,n.createProxy)(String.raw`C:\Users\Hitesh\git-hub-projects\portfolio\src\components\ui\tooltip.tsx#TooltipContent`),H=(0,n.createProxy)(String.raw`C:\Users\Hitesh\git-hub-projects\portfolio\src\components\ui\tooltip.tsx#TooltipProvider`),_=(0,n.createProxy)(String.raw`C:\Users\Hitesh\git-hub-projects\portfolio\src\components\ui\tooltip.tsx#TooltipTrigger`);var U=o(9823),T=o(7371);function M(){return(0,r.jsxs)("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14",children:[r.jsx("div",{className:"fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"}),(0,r.jsxs)(d,{className:"z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ",children:[U.D.navbar.map(e=>r.jsx(u,{children:(0,r.jsxs)(S,{children:[r.jsx(_,{asChild:!0,children:r.jsx(T.default,{href:e.href,className:(0,v.cn)(w({variant:"ghost",size:"icon"}),"size-12"),children:r.jsx(e.icon,{className:"size-4"})})}),r.jsx(D,{children:r.jsx("p",{children:e.label})})]})},e.href)),r.jsx(N,{orientation:"vertical",className:"h-full"}),Object.entries(U.D.contact.social).filter(([e,t])=>t.navbar).map(([e,t])=>r.jsx(u,{children:(0,r.jsxs)(S,{children:[r.jsx(_,{asChild:!0,children:r.jsx(T.default,{href:t.url,className:(0,v.cn)(w({variant:"ghost",size:"icon"}),"size-12"),children:r.jsx(t.icon,{className:"size-4"})})}),r.jsx(D,{children:r.jsx("p",{children:e})})]})},e)),r.jsx(N,{orientation:"vertical",className:"h-full py-2"}),r.jsx(u,{children:(0,r.jsxs)(S,{children:[r.jsx(_,{asChild:!0,children:r.jsx(g,{})}),r.jsx(D,{children:r.jsx("p",{children:"Theme"})})]})})]})]})}let $=(0,n.createProxy)(String.raw`C:\Users\Hitesh\git-hub-projects\portfolio\src\components\theme-provider.tsx`),{__esModule:I,$$typeof:R}=$;$.default;let L=(0,n.createProxy)(String.raw`C:\Users\Hitesh\git-hub-projects\portfolio\src\components\theme-provider.tsx#ThemeProvider`);o(5023);let W={metadataBase:new URL(U.D.url),title:{default:U.D.name,template:`%s | ${U.D.name}`},description:U.D.description,openGraph:{title:`${U.D.name}`,description:U.D.description,url:U.D.url,siteName:`${U.D.name}`,locale:"en_US",type:"website"},robots:{index:!0,follow:!0,googleBot:{index:!0,follow:!0,"max-video-preview":-1,"max-image-preview":"large","max-snippet":-1}},twitter:{title:`${U.D.name}`,card:"summary_large_image"},verification:{google:"",yandex:""}};function V({children:e}){return r.jsx("html",{lang:"en",suppressHydrationWarning:!0,children:r.jsx("body",{className:(0,v.cn)("min-h-screen bg-background antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",s().className),children:r.jsx(L,{attribute:"class",defaultTheme:"light",children:(0,r.jsxs)(H,{delayDuration:0,children:[e,r.jsx(M,{})]})})})})}},9823:(e,t,o)=>{"use strict";o.d(t,{D:()=>a});var r=o(9510),i=o(7666),s=o(1319);let n={globe:e=>r.jsx(i.Z,{...e}),email:e=>r.jsx(s.Z,{...e}),linkedin:e=>(0,r.jsxs)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e,children:[r.jsx("title",{children:"LinkedIn"}),r.jsx("path",{fill:"currentColor",d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})]}),github:e=>r.jsx("svg",{viewBox:"0 0 438.549 438.549",...e,children:r.jsx("path",{fill:"currentColor",d:"M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"})})},a={name:"Hitesh Nathani",initials:"DV",url:"https://dillion.io",location:"San Francisco, CA",locationLink:"https://www.google.com/maps/place/sanfrancisco",description:"I am a passionate frontend developer specializing in creating responsive, dynamic, and user-friendly web applications. With strong expertise in HTML, CSS, JavaScript, React.js, Redux and Next.js, I craft seamless digital experiences. My focus is on building clean and efficient code that ensures performance and scalability. I am driven by a love for innovation and the constant evolution of web technologies, and I'm always looking for new challenges to solve with modern tools",summary:"As a frontend developer with a keen eye for design and a passion for web technologies. I thrive on turning complex problems into intuitive, interactive interfaces. My journey in web development started with a curiosity for how things work behind the scenes, and now I specialize in leveraging tools like React.js and Next.js to bring ideas to life. When I'm not coding, I enjoy learning about emerging web trends and enhancing my skills in modern frameworks. Let's collaborate and build something amazing together!",avatarUrl:"/profile.png",skills:["Html","CSS","Javascript","Redux","React.js","Next.js"],navbar:[{href:"/",icon:o(8385).Z,label:"Home"}],contact:{email:"hello@example.com",tel:"+123456789",social:{GitHub:{name:"GitHub",url:"https://dub.sh/dillion-github",icon:n.github,navbar:!0},LinkedIn:{name:"LinkedIn",url:"https://www.linkedin.com/in/hitesh-nathani-06a803237/",icon:n.linkedin,navbar:!0},email:{name:"Send Email",url:"#",icon:n.email,navbar:!1}}},work:[{company:"Groovy Web",href:"https://www.groovyweb.co/",badges:[],location:"Onsite",title:"Frontend Web Developer",logoUrl:"/groovy.jpg",start:"February 2023",end:"Present",description:"I am responsible for developing and maintaining web applications using React.js and Next.js. I contributed to building scalable, user-friendly platforms, focusing on performance and responsiveness. I collaborated with cross-functional teams to ensure seamless integration and optimized user experiences across all projects."}],education:[{school:"Sardar Patel University",href:"https://www.spuvvn.edu/",degree:"Bachelor's Degree of Computer Application (BCA)",logoUrl:"/college.jpeg",start:"2019",end:"2022"},{school:"D. N. High School",href:"https://www.dnhighschool.ac.in/#/home/main",degree:"Higher secondary (HSC)",logoUrl:"/school.png",start:"2017",end:"2019"}],projects:[{title:"DinkumDoc",href:"https://dinkumdoc.com/",dates:"Jan 2024 - Feb 2024",active:!0,description:"DinkumDoc is a online doctor consultation platform that is changing the way Australians get medical consultations, e-prescriptions, online medical certificates, and referrals to specialists from the comfort of their own homes, rather than having to go to a doctor’s office and wait in line with other sick patients.",technologies:["Next.js","Javascript","Redux","Php","Stripe","Antd UI"],links:[{type:"Website",href:"https://dinkumdoc.com/",icon:r.jsx(n.globe,{className:"size-3"})}]},{title:"Let's Go",href:"https://letsgoplan.com",dates:"Feb 2024 - Present",active:!0,description:"Let’s Go is your ultimate platform for crafting unforgettable solo and group trips around the world! Our innovative tool simplifies travel planning, allowing you to explore diverse destinations and create personalized itineraries tailored to your unique interests. Whether traveling solo or with friends, Let’s Go makes it easy to discover unique experiences and turn your travel dreams into reality!",technologies:["Next.js","Javascript","Redux","Php","Stripe","Antd UI"],links:[{type:"Website",href:"https://letsgoplan.com/",icon:r.jsx(n.globe,{className:"size-3"})}],image:"",video:""}]}},644:(e,t,o)=>{"use strict";o.d(t,{cn:()=>s,p:()=>n});var r=o(5761),i=o(2386);function s(...e){return(0,i.m6)((0,r.W)(e))}function n(e){let t=new Date().getTime();e.includes("T")||(e=`${e}T00:00:00`);let o=Math.floor(Math.abs(t-new Date(e).getTime())/864e5),r=new Date(e).toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"});return o<1?"Today":o<7?`${r} (${o}d ago)`:o<30?`${r} (${Math.floor(o/7)}w ago)`:o<365?`${r} (${Math.floor(o/30)}mo ago)`:`${r} (${Math.floor(o/365)}y ago)`}},5023:()=>{}};