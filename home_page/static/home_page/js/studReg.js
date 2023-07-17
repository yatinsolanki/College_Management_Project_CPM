
function checkall(){
    var dob = document.getElementById('dob').value;
    var course = document.getElementById('course').value;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var fatherName = document.getElementById('fatherName').value;
    var profilePic = document.getElementById('profilePic').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var pincode = document.getElementById('pincode').value;
    var mob = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;
    var aadhar = document.getElementById('aadhar').value;
    var mobvali = /^\d{10}$/
    var name = /^[A-Za-z]+$/
// --------fname----------------------
    if (fname == '') {
        document.getElementById('sp_fname').innerHTML = 'Enter The First Name';
        return false
    }
    if (fname.length < 3 ) {
        document.getElementById('sp_fname').innerHTML = 'Name must be more then 3 character';
        return false
    }
    if (fname.length > 15 ) {
        fname.match(name)
        document.getElementById('sp_fname').innerHTML = 'Not More than 15 Character';
        return false
    }
    if (fname.match(name) != fname ) {
        document.getElementById('sp_fname').innerHTML = 'Only Alphabatic Character';
        return false
    }
    else{
        document.getElementById('sp_fname').innerHTML = '';
    }
// -----------lname------------------------------------------------------

    if (lname == '') {
        document.getElementById('sp_lname').innerHTML = 'Enter Last Name';
        return false
    }
    if (lname.length < 3) {
        document.getElementById('sp_lname').innerHTML = 'last name must be more then 3 character';
        return false
    }
    if (lname.length > 15) {
        document.getElementById('sp_lname').innerHTML = 'Enter 15 Last Name';
        return false
    }
    if (lname.match(name) != lname) {
        document.getElementById('sp_lname').innerHTML = 'only Alphabetic characters';
        return false
    }
    else{
        document.getElementById('sp_lname').innerHTML = '';
    }
// ----------------------------------------------
    var fvalidation = /^[A-Za-z ]+$/
    if (fatherName == '') {
        document.getElementById('sp_fatherName').innerHTML = 'Enter The Father Name';
        return false
    }
    if (fatherName.length < 3) {
        document.getElementById('sp_fatherName').innerHTML = 'Enter 3';
        return false
    }
    if (fatherName.length > 25 ) {
        document.getElementById('sp_fatherName').innerHTML = 'Enter 25';
        return false
    }
    if (fatherName.match(fvalidation) != fatherName) {
        document.getElementById('sp_fatherName').innerHTML = '**Name';
        return false
    }
    else{
        document.getElementById('sp_fatherName').innerHTML = '';
    }
    // ------------------------------------------
    if (dob == '') {
        document.getElementById('sp_dob').innerHTML = 'dob';
        return false
    }
    else{
        document.getElementById('sp_dob').innerHTML = '';
    }    
    
    if (profilePic == '' || profilePic == undefined || NaN ) {
        document.getElementById('sp_profilePic').innerHTML = 'Enter Profile Pic';
        return false
    }
    else{
        document.getElementById('sp_profilePic').innerHTML = '';
    }
    if (address == '' ) {
        document.getElementById('sp_address').innerHTML = 'Enter address';
        return false
    }
    else{
        document.getElementById('sp_address').innerHTML = '';
    }
// -----------------------------------------------------------------
    if (city == '' ) {
        document.getElementById('sp_city').innerHTML = 'Enter city';
        return false
    }
    if (city.match(name) != city ) {
        document.getElementById('sp_city').innerHTML = 'Enter city';
        return false
    }
    else{
        document.getElementById('sp_city').innerHTML = '';
    }
// ------------------------------------
    var pcode = /^\d{6}$/
    if (pincode == '' ) {
        document.getElementById('sp_pincode').innerHTML = 'Enter pincode';
        return false
    }
    if (pincode.match(pcode) != pincode ) {
        document.getElementById('sp_pincode').innerHTML = 'Enter pincode';
        return false
    }
    else{
        document.getElementById('sp_pincode').innerHTML = '';
    }
// -------------------------------------------------------------
    if (course == '--Choose Course--') {
        document.getElementById('sp_course').innerHTML = 'Select The Course';
        return false
    }
    else{
        document.getElementById('sp_course').innerHTML = '';
    }
// -------------mobile---------------
    if (mob == '') {
        document.getElementById('sp_mob').innerHTML = 'Enter Mobile Number';
        return false
    }
    if (mob.match(mobvali) != mob) {
        document.getElementById('sp_mob').innerHTML = 'Enter Mobile Number';
        return false
    }
    else{
        document.getElementById('sp_mob').innerHTML = '';
    }
    // -------------email-------------
    // var evali =/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    var evali = /^\w+([\._]?\w+)*@\w+([\._]?\w+)*(\.\w{2,3})+$/
    if (email == '' || email == undefined) {
        document.getElementById('sp_email').innerHTML = 'Enter Email';
        return false
    }
    // ---------this is not work 
    // if (email.match(evali) != email) {
    //     document.getElementById('sp_email').innerHTML = 'Enter != Email';
    //     return false
    // }
    // --------this is working--------
    if (!email.match(evali)) {
        document.getElementById('sp_email').innerHTML = '!!!!!!!!!!';
        return false
    }
    else {
        document.getElementById('sp_email').innerHTML = '';
    }
    // --------aadhar-------------
    var aadharvali = /^\d{16}$/
    if (aadhar == '') {
        document.getElementById('sp_aadhar').innerHTML = 'Aadharcard No.';
        return false
    }
    if (aadhar.match(aadharvali) != aadhar) {
        document.getElementById('sp_aadhar').innerHTML = 'currect Aadharcard No.';
        return false
    }
    else{
        document.getElementById('sp_aadhar').innerHTML = '';
    }    

    return true;
}