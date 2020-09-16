(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,function(t,e,n){t.exports={contactForm:"ContactsForm_contactForm__1BrDn",contactForm_input:"ContactsForm_contactForm_input__1tm3h",contactForm_input__name:"ContactsForm_contactForm_input__name__2s3hB",contactForm_input__number:"ContactsForm_contactForm_input__number__r3R8R",contactForm_btn:"ContactsForm_contactForm_btn__2IfuS"}},,function(t,e,n){t.exports={contactsList_item:"ContactsListItem_contactsList_item__GDKwk",contactsList_item__text:"ContactsListItem_contactsList_item__text__3lFDa",contactsList_item__text_name:"ContactsListItem_contactsList_item__text_name__1olj5",contactsList_item__text_number:"ContactsListItem_contactsList_item__text_number__3asB6",contactsList_item__btn:"ContactsListItem_contactsList_item__btn__Vh9-8"}},,,,,function(t,e,n){t.exports={filter:"Filter_filter__MNgfI",filter_input:"Filter_filter_input__2Hrt8"}},,,,function(t,e,n){t.exports={contactList:"ContactsList_contactList__3x57F"}},,function(t,e,n){t.exports=n(22)},,,,,function(t,e,n){},,,function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(10),r=n.n(o),s=(n(19),n(13)),i=n(4),m=n(5),u=n(7),l=n(6),_=n(24),p=n(11),f=n(1),b=n.n(f),h=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onAddContact(a,c),t.setState({name:"",number:""})},t}return Object(m.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{type:"submit",className:b.a.contactForm,onSubmit:this.handleSubmit},c.a.createElement("label",{className:b.a.contactForm_input},"Name",c.a.createElement("input",{type:"name",name:"name",className:b.a.contactForm_input__name,required:!0,value:e,onChange:this.handleChange,placeholder:"Enter contact name"})),c.a.createElement("label",{className:b.a.contactForm_input},"Number",c.a.createElement("input",{type:"tel",name:"number",className:b.a.contactForm_input__number,required:!0,pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",value:n,onChange:this.handleChange,placeholder:"000-00-00"})),c.a.createElement("button",{type:"submit",className:b.a.contactForm_btn},"Add contact"))}}]),n}(a.Component),C=n(2),d=n.n(C),v=n(3),F=n.n(v),L=function(t){var e=t.name,n=t.number,a=t.onRemoveContact;return c.a.createElement("li",{className:F.a.contactsList_item},c.a.createElement("p",{className:F.a.contactsList_item__text},c.a.createElement("span",{className:F.a.contactsList_item__text_name},e,": "),c.a.createElement("span",{className:F.a.contactsList_item__text_number},n)),c.a.createElement("button",{type:"button",className:F.a.contactsList_item__btn,onClick:a},"Delete"))},g=n(12),E=n.n(g),N=function(t){var e=t.contacts,n=t.onRemoveContact;return c.a.createElement("ul",{className:E.a.contactList},e.map((function(t){var e=t.id,a=t.name,o=t.number;return c.a.createElement(L,{key:e,name:a,number:o,onRemoveContact:function(){return n(e)}})})))};N.propTpes={contacts:d.a.arrayOf(d.a.shape({id:d.a.string.isRequired,name:d.a.string.isRequired,number:d.a.string.isRequired})),onRemoveContact:d.a.func.isRequired};var y=N,x=n(8),k=n.n(x),O=function(t){var e=t.value,n=t.onChangeFilter;return c.a.createElement("div",null,c.a.createElement("label",{className:k.a.filter},"Find contacts by name",c.a.createElement("input",{className:k.a.filter_input,type:"text",value:e,onChange:function(t){return n(t.target.value)},placeholder:"Enter name"})))},S=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e,n){var a=t.state.contacts;if(t.checkContactName(a,e))alert("".concat(e," is alredy i contacts"));else{var c={id:Object(_.a)(),name:e,number:n};t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[c])}}))}},t.changeFilter=function(e){t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.checkContactName=function(t,e){return t.some((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return c.a.createElement("section",{className:"container"},c.a.createElement("h1",null,"Phonebook"),c.a.createElement(h,{onAddContact:this.addContact}),c.a.createElement("h2",null,"Contacts"),c.a.createElement(O,{value:t,onChangeFilter:this.changeFilter}),c.a.createElement(y,{contacts:e,onRemoveContact:this.removeContact}))}}]),n}(a.Component);r.a.render(c.a.createElement(S,null),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.efdac959.chunk.js.map