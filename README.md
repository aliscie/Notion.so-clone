# Notion.so-clone
I really want to create a spreadsheet table like Notion.so table or microsoft excels where I can add formulas to it, but I faced to manny difficulties with that. So, fork and suggest to me, plaes.

#

*`Actions` Folder.
  1. the first file called `component.jsx` where it is render diffierent components condtionally (based on a value called `View` )
  2. `handlKey.jsx` file has a function which hanld the keyboard actions. For example, when I hit enter it create a new field in my data, or when I hit option it shows a popup windo with few options just like notion.so but instead of / i used option key.

*`components` Folder.
  1. all the components are simpel and don't need much of explinations.
  2. `DND` file use react-beautiful-dnd for drag and drop effects
    * this file has 4 main function tow of them is ordnary drag and drop function and tow of them (`DragH`,`DropH`) used for horizontal drag and drop that H in their names stand for hoizontal. I'm using the `DragH` and `DropH` function for to reorder the columns of the table.
    * the function `reorderH` it looks a bit complicated but all what its do is reordering the columns as well as the rows .
      * for reordering the row is the complicated bart where I need to convert the rows in tow diffreent format and then reorder them and then take the resultes and convert them to the orginal format.
      
*`Views` Folder.
  1. all files are simple
  2. but the file `TableH` is wher all the needed work.
    * in this file in line `21` you can see I had the code `event.target.value.includes('=')` I butted this for the formulas
    * any cell start with = that mean it is a formuals cell 
    * but nothing work for me yet so I need your help about that
    * however I want to make a table just like excells. For example, when I say `= age[2] +1` that cell will return the the third cell in the column age and add to it 1.
