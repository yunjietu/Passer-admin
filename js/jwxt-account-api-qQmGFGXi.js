import{b as t,p as e}from"./index-ZxpkwSGJ.js";
/**
 * 云上河开账号管理 API
 *
 * @Author 1024创新实验室: 小何
 * @Date 2025-01-15 10:00:00
 * @Wechat zhuoda1024
 * @Email lab1024@163.com
 * @Copyright <a href="https://1024lab.net">1024创新实验室</a>
 */const a={queryByPage:t=>e("/oa/jwxt-account/page/query",t),createAccount:t=>e("/oa/jwxt-account/create",t),update:t=>e("/oa/jwxt-account/update",t),getDetail:e=>t(`/oa/jwxt-account/get/${e}`),deleteAccount:e=>t(`/oa/jwxt-account/delete/${e}`),manualSignin:t=>e("/oa/jwxt-account/manual-signin",t),getSigninRecords:t=>e("/oa/jwxt-account/signin-records/query",t),getSemesterInfo:(e,a)=>t(`/oa/jwxt-account/semester-info?userCode=${e}&password=${a}`),executeAutoSignin:()=>e("/oa/jwxt-account/auto-signin"),getCurrentPrice:()=>t("/oa/jwxt-account-price/current"),updatePrice:t=>e("/oa/jwxt-account-price/update",t),updateEnabled:t=>e(`/oa/jwxt-account-price/enabled/${t}`),getCurrentPriceAmount:()=>t("/oa/jwxt-account-price/amount")};export{a as j};
