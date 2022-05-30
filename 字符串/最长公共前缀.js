/*
给你一个大小为 n 的字符串数组 strs ，其中包含n个字符串 , 编写一个函数来查找字符串数组中的最长公共前缀，返回这个公共前缀。

数据范围： 0 \le n \le 50000≤n≤5000， 0 \le len(strs_i) \le 50000≤len(strs 
i
​
 )≤5000
进阶：空间复杂度 O(n)O(n)，时间复杂度 O(n)O(n)
示例1
输入：
["abca","abc","abca","abc","abcc"]
复制
返回值：
"abc"
复制
示例2
输入：
["abc"]
复制
返回值：
"abc"
 */

function longestCommonPrefix(strs) {
    if(arr.length == 0) return '';
    let str = strs[0];
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < strs.length; j++) {
            if(str[j][i] !== str[i]) return str.slice(0, i);
        }
    }
    return str
}