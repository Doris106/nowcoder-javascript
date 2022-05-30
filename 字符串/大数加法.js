/*
以字符串的形式读入两个数字，编写一个函数计算它们的和，以字符串形式返回。

数据范围：s.length,t.length \le 100000s.length,t.length≤100000，字符串仅由'0'~‘9’构成
要求：时间复杂度 O(n)O(n)
示例1
输入：
"1","99"
复制
返回值：
"100"
复制
说明：
1+99=100       
示例2
输入：
"114514",""
复制
返回值：
"114514"
*/ 
 function solve( s ,  t ) {
    // write code here
        let len_i = s.length - 1;
        let len_j = t.length -1;
        if(len_i < len_j){
            //如果字符串s的长度比字符串t的长度小就交换
            let temp1 = s;
            s = t;
            t = temp1;

            let temp = len_i;
            len_i = len_j;
            len_j = temp;
        }
        let temp = 0;///用来就当前这一位的加和
        let carry = 0;///保存进位
        let c = len_i - len_j;///用来给短的那一字符串添加前导“0”
        while(c > 0){
            t = '0' + t;
            c --;
        }
        let sum = "";
        for(let i = len_i;i >= 0;i --){///倒着开始进行进位运算
            temp = parseInt(s[i]) + parseInt(t[i]) + carry;
            if(temp >= 10){///如果temp的值超过9则有进位
                temp -= 10;
                carry = 1;
            }else{
                carry = 0;
            }
            sum = String.fromCharCode(temp + 48) + sum;
            //s[i] = String.fromCharCode(temp + 48);///当前这位做完加法后的值
        }

        if(carry == 1){
            ///d
            sum  = "1" + sum ;
        }
        return sum;
}
module.exports = {
    solve : solve
};