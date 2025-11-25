import{p as t,b as e,f as o}from"./index-ZxpkwSGJ.js";
/*
 * 职校家园账号管理
 *
 * @Author:    1024创新实验室-主任：卓大
 * @Date:      2025-07-20 12:09:00
 * @Wechat:    zhuda1024
 * @Email:     lab1024@163.com
 * @Copyright  1024创新实验室 （ https://1024lab.net ），Since 2012
 */const a={create:e=>t("/oa/account/create",e),delete:t=>e(`/oa/account/delete/${t}`),detail:t=>e(`/oa/account/get/${t}`),pageQuery:e=>t("/oa/account/page/query",e),exportExcel:t=>o("/oa/account/exportExcel",t),queryList:()=>e("/oa/account/query/list"),update:e=>t("/oa/account/update",e),getZhixiaoUserInfo:e=>t("/oa/account/getZhixiaoUserInfo",e),getInternshipInfoByAccount:e=>t("/oa/account/getInternshipInfoByAccount",e),getInternshipInfo:e=>t("/oa/account/getInternshipInfo",e),getUserInfoByToken:e=>t("/oa/account/getUserInfoByToken",e),queryDuplicateAccount:()=>e("/oa/account/duplicate/list"),deleteDuplicateAccount:()=>t("/oa/account/duplicate/delete"),getInternshipDetail:e=>t("/oa/account/getInternshipDetail",e),submitDailyReport:e=>t("/oa/account/report/daily",e),submitWeeklyReport:e=>t("/oa/account/report/weekly",e),submitMonthlyReport:e=>t("/oa/account/report/monthly",e),submitReport:e=>t("/oa/account/report/submit",e),generateAiReportContent:e=>t("/oa/account/report/generate-ai-content",e),queryReportHistory:e=>t("/oa/account/report/history",e),batchReport:e=>t("/oa/account/report/batch",e)};export{a};
