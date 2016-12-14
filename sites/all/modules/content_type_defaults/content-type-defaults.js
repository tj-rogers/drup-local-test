jQuery(function($) {
// ---------------------------------------------------------------------------------------------


if($('body').hasClass("page-admin-structure-types-add")){

	// set "Preview before submitting" option to disabled
	$('#edit-node-preview-0').attr('checked','checked');

	// uncheck "Promote to Front Page" checkbox
	$('#edit-node-options-promote').attr('checked','');

	// uncheck "Display author and date information" checkbox
	$('#edit-node-submitted').attr('checked','');

	// hide "Save Content Type" in favor of "Save and Add Fields"
	$('#edit-submit').hide();

}


// ---------------------------------------------------------------------------------------------
});