




function AddressBook()
{
    this.contacts=[]
}
function Contact(firstName,lastName,phoneNumber,email,address)
{
 this.firstName=firstName,

 this.lastName =lastName,

 this.phoneNumber =phoneNumber,

 this.email = email,

 this.address = address

}    Contact.prototype.full_name = function()

{console.log("fullName:" + this.firstName + " " + this.lastName);
}
var contact = new Contact ( " Jaelle ", " Amongi "," 0784330780 ","  jaelleamo@gmail.com ",[" Kateregga " + "Kampala " + "Uganda "]);

contact.full_name ();
