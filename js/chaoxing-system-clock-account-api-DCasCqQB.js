import{p as c,b as o}from"./index-ZxpkwSGJ.js";
/*
 * 学习通系统打卡账号管理
 *
 * @Author:    1024创新实验室
 * @Date:      2025-01-XX
 * @Wechat:    zhuda1024
 * @Email:     lab1024@163.com
 * @Copyright  1024创新实验室 （ https://1024lab.net ）,Since 2012
 */const a={create:o=>c("/oa/chaoxing-system-clock-account/create",o),delete:c=>o(`/oa/chaoxing-system-clock-account/delete/${c}`),detail:c=>o(`/oa/chaoxing-system-clock-account/get/${c}`),pageQuery:o=>c("/oa/chaoxing-system-clock-account/page/query",o),update:o=>c("/oa/chaoxing-system-clock-account/update",o),getLocationFromAddress:o=>c("/oa/chaoxing-system-clock-account/getLocationFromAddress",o),clockIn:o=>c("/oa/chaoxing-system-clock-account/clockIn",o),clockInHistoryPage:o=>c("/oa/chaoxing-system-clock-account/clock-records/page/query",o),verifyLogin:o=>c("/oa/chaoxing-system-clock-account/verifyLogin",o)};export{a as c};
