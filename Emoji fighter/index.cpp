#include<iostream>
using namespace std;

int fact(int n){
    if(n<0){
        return (-1);
    }
    if (n==0){
        return (0);
    }
    else{
        return(n*fact(n-1));
    }
}
int main(){
    int n=1;
    cout<<"fact value is: ";
    int factt=fact(n);
    cout<<factt;}