var default_order = "asc"; // "asc" || "desc"
var asc_img_uri = "images/asc.gif";
var desc_img_uri = "images/desc.gif";
var asc_img_alt_text = "aufsteigend sortiert: &auml;ndern in absteigend sortiert";
var desc_img_alt_text = "absteigend sortiert: &auml;ndern in aufsteigend sortiert";

var tables = new Array();
var ti = 0;

function sort_table(id) {
   this.id = id;
   this.obj;
   this.tbody_obj;
   this.sort_cols = 0;
   this.sort_rows = 0;
   this.img_ids = new Array();
   this.tr_ids = new Array();
   this.td_ids = new Array();
   this.active_sort_col;
   this.active_sort_order = default_order;
}

function init_tabsort(table_id)
{
   if(!document.getElementById)
     return;
   tables[ti] = new sort_table(table_id);
   var t = ti;
   ti += 1;
   tables[t].obj = document.getElementById(table_id);
   for(var i = 0; i < tables[t].obj.childNodes.length; i++)
   {
      switch(tables[t].obj.childNodes[i].nodeName.toLowerCase())
      {
         case 'colgroup':
            for(j = 0; j < tables[t].obj.childNodes[i].childNodes.length; j++)
              if(tables[t].obj.childNodes[i].childNodes[j].nodeName.toLowerCase() == 'col')
                 tables[t].sort_cols += 1;
            break;
         case 'tbody':
            tables[t].tbody_obj = tables[t].obj.childNodes[i];
            break;
         default: break;
      }
   }
   var tri = 0;
   var tdi = 0;
   for(i = 0; i < tables[t].tbody_obj.childNodes.length; i++)
   {
      if(tables[t].tbody_obj.childNodes[i].nodeName.toLowerCase() == 'tr')
      {
         tables[t].tbody_obj.childNodes[i].id = 'tr_' + tri;
         tables[t].tr_ids.push('tr_' + tri);
         tables[t].sort_rows += 1;
         tdi = 0;
         for(j = 0; j < tables[t].tbody_obj.childNodes[i].childNodes.length; j++)
         {
           if(tables[t].tbody_obj.childNodes[i].childNodes[j].nodeName.toLowerCase() == 'td')
           {
             tables[t].tbody_obj.childNodes[i].childNodes[j].id = 'tr_' + tri + '_td_' + tdi;
             tables[t].td_ids.push('tr_' + tri + '_td_' + tdi);
             tdi += 1;
           }
         }
         tri += 1;
      }
   }
}

function get_sort_table_obj_by_id(id)
{
   for(var i = 0; i < tables.length; i++)
      if(tables[i].id == id)
         return(tables[i]);
}

function numsort(a,b)
{
   return parseFloat(a) - parseFloat(b);
}

function linksort(a,b)
{
   var iPos = a.indexOf('>');
   if(iPos >= 0)
     a = a.substring(iPos+1, a.length-4);
   iPos = b.indexOf('>');
   if(iPos >= 0)
     b = b.substring(iPos+1, b.length-4);

   return a.localeCompare(b);
}

function tabsort(table_id, sort_type, col_n)
{
   if(!document.getElementById)
     return;
   var delimiter = "|||||";
   var to = get_sort_table_obj_by_id(table_id);
   var sort_array = new Array();
   for(var i = 0; i < to.sort_rows; i++)
   {
      tr_array = new Array();
      tr_id = 'tr_' + i;
      td_id = tr_id + '_td_' + col_n;
      tr_array.push(document.getElementById(td_id).innerHTML);
      for(var j = 0; j < to.sort_cols; j++)
      {
          if(j == col_n)
             continue;
          else
          {
             tr_id = 'tr_' + i;
             td_id = tr_id + '_td_' + j;
             tr_array.push(document.getElementById(td_id).innerHTML);
          }
      }
      tr_str = tr_array.join(delimiter);
      sort_array.push(tr_str);
   }
   if(sort_type == 'an')
      sort_array.sort();
   else
     if(sort_type == 'n')
       sort_array.sort(numsort);
     else
       if(sort_type == 'lnk')
         sort_array.sort(linksort);
   if(to.active_sort_order == 'desc')
   {
      sort_array.reverse();
      to.active_sort_order = 'asc';
   }
   else
      to.active_sort_order = 'desc';
   for(i = 0; i < sort_array.length; i++)
   {
      tr_array = sort_array[i].split(delimiter);
      first = tr_array.shift();
      tr_array.splice(col_n, 0, first);
      for(j = 0; j < to.sort_cols; j++)
      {
         tr_id = 'tr_' + i;
         td_id = tr_id + '_td_' + j;
         document.getElementById(td_id).innerHTML = tr_array[j];
      }
   }
   var img_html;
   if(to.active_sort_order == 'asc')
      img_html = '<img src="' + desc_img_uri + '" alt="' + desc_img_alt_text + '">';
   else
      img_html = '<img src="' + asc_img_uri + '" alt="' + asc_img_alt_text + '">';
   for(i = 0; i < to.sort_cols; i++)
   {
      var sortimg = document.getElementById(table_id + '_sort_img_' + i);
      if(sortimg == undefined)
        continue;
      if(i == col_n)
        sortimg.innerHTML = img_html + " ";
      else
        sortimg.innerHTML = "";
   }
}