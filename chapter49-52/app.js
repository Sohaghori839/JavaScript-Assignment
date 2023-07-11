//Task # 1

/* function Submit(){
  var name = document.getElementById("name").value;
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmpassword = document.getElementById("confirmpassword").value;
  document.write("<h1>Your Data</h1> <br>")
  document.write("Name : "+name+" <br> ");
  document.write("Username : "+username+" <br> ");
  document.write("Email : "+email+" <br> ");
  document.write("Password : "+password+" <br> ");
  document.write("Confirm Password : "+confirmpassword);
}
*/

 //Task # 2

// function ReadFullPara(){
//   var text = "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
//   document.getElementById("para").innerHTML = text;
// }

//Task # 3

// function edit_row(no)
// {
//  document.getElementById("edit_button"+no).style.display="none";
//  document.getElementById("save_button"+no).style.display="block";
  
//  var index=document.getElementById("index_row"+no);
//  var name=document.getElementById("name_row"+no);
//  var clas=document.getElementById("clas_row"+no);
  
//  var index_data=index.innerHTML;
//  var name_data=name.innerHTML;
//  var clas_data=clas.innerHTML;
  
//  index.innerHTML="<input type='text' id='index_text"+no+"' value='"+index_data+"'>";
//  name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
//  clas.innerHTML="<input type='text' id='clas_text"+no+"' value='"+clas_data+"'>";
// }

// function save_row(no)
// {
//  var index_val=document.getElementById("index_text"+no).value;
//  var name_val=document.getElementById("name_text"+no).value;
//  var age_val=document.getElementById("clas_text"+no).value;

//  document.getElementById("index_row"+no).innerHTML=index_val;
//  document.getElementById("name_row"+no).innerHTML=name_val;
//  document.getElementById("clas_row"+no).innerHTML=clas_val;

//  document.getElementById("edit_button"+no).style.display="block";
//  document.getElementById("save_button"+no).style.display="none";
// }

// function delete_row(no)
// {
//  document.getElementById("row"+no+"").outerHTML="";
// }

// function add_row()
// {
//  var new_index=document.getElementById("new_index").value;
//  var new_name=document.getElementById("new_name").value;
//  var new_clas=document.getElementById("new_clas").value;
  
//  var table=document.getElementById("data_table");
//  var table_len=(table.rows.length)-1;
//  var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='index_row"+table_len+"'>"+new_index+"</td><td id='name_row"+table_len+"'>"+new_name+"</td><td id='clas_row"+table_len+"'>"+new_clas+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

//  document.getElementById("new_index").value="";
//  document.getElementById("new_name").value="";
//  document.getElementById("new_clas").value="";
// }


