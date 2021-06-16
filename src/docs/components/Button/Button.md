
onClickHandler used:
``` noeditor
const onClickHandler = (event)=>{
        alert('custom handler')
}
```
``` tsx padded
const onClickHandler = ()=>{
        alert('custom handler');
}
<>
<Button  variant='outlined' br={20} onClickHandler={onClickHandler}>first</Button>

<Button  variant='contained' onClickHandler={onClickHandler}>second</Button>

<Button diabled variant='text' onClickHandler={onClickHandler}>third</Button>
</>
```


