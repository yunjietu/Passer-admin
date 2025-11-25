import{p as o,b as c}from"./index-ZxpkwSGJ.js";
/*
 * 哈科职院账号管理
 *
 * @Author:    1024创新实验室
 * @Date:      2025-01-XX
 * @Wechat:    zhuda1024
 * @Email:     lab1024@163.com
 * @Copyright  1024创新实验室 （ https://1024lab.net ）,Since 2012
 */const e={create:c=>o("/oa/hrkzy-account/add",c),delete:o=>c(`/oa/hrkzy-account/delete/${o}`),detail:o=>c(`/oa/hrkzy-account/get/${o}`),pageQuery:c=>o("/oa/hrkzy-account/page/query",c),update:c=>o("/oa/hrkzy-account/update",c),getAccountInfo:(c,e)=>o(`/oa/hrkzy-account/getAccountInfo?account=${encodeURIComponent(c)}&password=${encodeURIComponent(e)}`),clock:o=>c(`/oa/hrkzy-account/clock/${o}`),clockRecordPage:c=>o("/oa/hrkzy-account/clockRecord/page/query",c),getLocationFromAddress:c=>o("/oa/hrkzy-account/getLocationFromAddress",c)};export{e as h};
