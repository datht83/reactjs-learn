# Component
* Là một khối đóng gói : html(tự định nghĩa, ko là html bình thường), props,state ....
* Không chấp nhận có 2 div ngang hàng nhau, chỉ có 1 div và lồng bên trong các tag
## Khai báo component
### `Kiểu hàm bình thường`
```
function One() {
   return (
    <div> Cach so 1 </div> <div> cach 1-1</div>
   )
}
=> báo lổi
function One() {
   return (
    <div>
      <div> cach 1-1</div>
      <div> cach 1-2</div> 
    </div> 
   )
}
=> OK
```
### `Kiểu anonymous function`
```
var Two = function(){
  return (
    <div> 
      <h1> Cach so 2 </h1>
    </div>
  )  
}
```
### `Kiểu arrow function (ES6)`
```
var Three = () => (
  <div>
    <h1>cach 3</h1>
  </div>
)
```
### `Kiểu class`
```
class Four extends Component {
  render() {
    return (
      <div>
        <h1>cach so 4 - class component</h1>
      </div>
    );
  }
}
```