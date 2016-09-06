---
title: 后续遍历二叉树
date: 2016-08-29
layout: post
---

先打印左子树和右子树，再打印运算符，称为后续遍历。
以下代码以后续遍历的方式构造表达式二叉树。
```java
package com.bd.tvmanager;

import com.bd.tvmanager.*;
class BinaryNode{

    Object element;
    BinaryNode left;
    BinaryNode right;
}
/**
 * Created by Administrator on 2016/8/28.
 */
public class TestTwoTree {

    static PrintVal print = new PrintVal();
    public static void main(String[] args){

        char[] tree = new char[7];
        print.getValn(tree.hashCode());
        String s="acd*e++";
        tree=s.toCharArray();
        print.getValn(tree.hashCode());
        char a='z';
        print.getValn(a+1);
        BinaryNode[] nodeArr = new BinaryNode[tree.length];
        int nodei=0;
        nodeArr=printTree(tree,nodeArr,nodei);
        print.getValn(nodeArr[0].element);
    }

    public static BinaryNode[] printTree(char[] ch,BinaryNode[] nodeArr,int length){
        BinaryNode node=new BinaryNode();
        node.element=ch[length];
        if(length==ch.length-1){
            node.right=nodeArr[0];
            node.left=nodeArr[1];
            nodeArr = remove(nodeArr);
            nodeArr = remove(nodeArr);
            return push(nodeArr,node);
        }else{
            if(97<=ch[length]&&ch[length]<=122){
                nodeArr=push(nodeArr,node);
            }else{
                if(length==1){
                    node.right=nodeArr[0];
                    remove(nodeArr);
                }else if(length>=2){
                    node.right=nodeArr[0];
                    node.left=nodeArr[1];
                    nodeArr = remove(nodeArr);
                    nodeArr = remove(nodeArr);
                }
                nodeArr=push(nodeArr,node);
            }
            return printTree(ch,nodeArr,++length);
        }
    }

    /**
     * 模仿栈的pop方法
     * @param ch
     * @return
     */
    public static char pop(char[] ch){

        return ch[0];
    }

    /**
     * 模仿栈的push方法
     * @param ch
     * @param c
     * @return
     */
    public static BinaryNode[] push(BinaryNode[] ch,BinaryNode node){
        BinaryNode[] ch2=new BinaryNode[ch.length+1];
        ch2[0]=node;
        for(int i=0;i<ch.length;i++){
            ch2[i+1]=ch[i];
        }
        return ch2;
    }

    /**
     * 移除栈顶元素
     * @param ch
     * @return
     */
    public static BinaryNode[] remove(BinaryNode[] ch){
        BinaryNode[] ch1=new BinaryNode[ch.length-1];
        for(int i=0;i<ch.length-1;i++){
            ch1[i]=ch[i+1];
        }
        return ch1;
    }
}
```