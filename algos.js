
// function ciaFoodTruck(arr){
//     var xArr= [];
//     var yArr= [];
//     var newArr= [];
//     for(i=0;i<arr.length;i++){ 
//         xArr.push(arr[i][0]);
//         yArr.push(arr[i][1]);
//     }
//     xArr.sort((a,b) => a-b);
//     yArr.sort((a,b) => a-b);
//     newArr.push(xArr[Math.floor(xArr.length/2)])
//     newArr.push(yArr[Math.floor(yArr.length/2)])
//     console.log(newArr)
//     return newArr;
// }

// ciaFoodTruck([[-5,5],[5,-5]]);

// function flatten(arr){
//     var newArr = [];
//     for(var i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             // console.log("i am an array")
//             // console.log(arr[i])
//             newArr = newArr.concat(flatten(arr[i]));
//             console.log(i)
//         }
//         else{
//             newArr.push(arr[i]);
//         }
//     }
//     // console.log(newArr);
//     console.log(i)
//     return newArr;
// }

// console.log(flatten([1,[2,3],4,[],[5,[6,7]]]));
// if(this.head){
        //     this.child = this.head;
        // }


class SLNode {
    constructor(num) {
        this.val = num;
        this.next = null;
        this.child = null;
        if(num.head){
            this.child = num.head;
        }
    }
}
class SLL {
    constructor() {
        this.head = null;
        this.count = 0;
        this.current = null;
    }
    add(num) {
        if (this.head == null) {
            this.head = new SLNode(num);
        }
        else {
            let runner = this.head;
            while (runner.next !== null) {
                runner = runner.next;
            }
            runner.next = new SLNode(num);
        }
        this.count++;
        return this;
    }
    display() {
        if (this.head === null) {
            console.log("This is not the list you are looking for.");
            return this;
        }
        var runner = this.head;
        while (runner !== null) {
            console.log(runner.val);
            runner = runner.next;
        }
        return this;
    }
    reverse(){
        if (this.head === null) {
            console.log("This is not the list you are looking for.");
            return this;
        }
        var runner = this.head;
        var temp = null;
        while(runner.next != null){
            temp = runner.next;
            runner.next = runner.next.next;
            temp.next = this.head;
            this.head = temp;
        }
        return this;
    }
    flatten(){
        if (this.head === null){
            console.log("This is not the list you are looking for.");
            return this;
        }
        var runner = this.head;
        var temp = null;
        var end = null;
        var current = null;
        while(runner.next != null){
            if(runner.next.child != null){
                temp = runner.next.next;
                current = runner.next.val;
                runner.next = runner.next.child;
                runner = current.flatten();
                runner.next = temp;
            }
            runner = runner.next;
            console.log(runner.val)
        }
        end = runner;
        return end;
    }
}
console.log("**********************************************");
var list = new SLL();
list.add(6).add(9).add(14).add(15).add(3).add(4);

list.display();
console.log("**********************************************");

list.reverse();
list.display();
var list2 = new SLL();
list2.add(1).add(2).add(list).add(3);
list2.display();
console.log("**********************************************");
// list2.flatten();
console.log("**********************************************");
// list2.display();
var list4 = new SLL();
list4.add(9).add(9);
var list3 = new SLL();
list3.add(42).add(list2).add(42).add(list4).add(42);
console.log("**********************************************");
list3.display();
list3.flatten();
console.log("**********************************************");
list3.display()