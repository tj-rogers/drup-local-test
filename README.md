# Drupal Base Installation

*Current core version: 7.50*

To facilitate getting off the ground and running quickly, this repo contains a fully operational base install of Drupal 7 and bare minimum modules for a medium-large website.

A database file (SQL) is included in the **~db-exports** folder that includes enabled/disabled modules and preset configurations for core and contributed modules.

## Included Contrib Modules

* Absolute Messages
* Administration Menu
* Admin Views
* Backup and Migrate
* Better Formats
* Block Class
* CKEditor (+ CKFinder library)
* Content Type Defaults
* Context
* CTools
* Entity API
* Entity Reference
* Fieldgroup
* Global Redirect
* Google Analytics
* Menu Attributes
* Metatag
* Module Filter
* Multi-Upload Filefield Widget
* Multi-Upload Imagefield Widget
* Page Title
* Pathauto
* Quickupdate
* Redirect
* Reroute Email
* Rules
* Shorten
* Site Verify
* Token
* Transliteration
* Views
* Views Bulk Operations
* Views PHP
* Webform
* XMLSitemap

## Login Info

**Username:** root  
**Password:** drupalbase33 (change this after first login!)

## Usage

1- Simply download the entire pacakage and upload files to server of choice. After creating a database at the same hosting as the files, import the included SQL file into the database. (/~db-exports/drupalbase.sql)

2- Make sure to rename the *settings.php.bak* file (sites/default/settings.php.bak) - name it *settings.php*, and change the database connection string as well as the cookie domain (see below).

In your new settings.php, update database connection string (starting on line 213):

	$databases = array (
	  'default' => 
	  array (
	    'default' => 
	    array (
	      'database' => 'YOUR_DATABASE',
	      'username' => 'YOUR_DB_USER',
	      'password' => 'YOUR_DB_PASSWORD',
	      'host' => 'localhost',
	      'port' => '',
	      'driver' => 'mysql',
	      'prefix' => '',
	    ),
	  ),
	);

3- Lastly, update cookie domain (line 338).

That's it!

---

This package has been created by [Marcus D. Burnette](http://www.mburnette.com) primarily for use at [Thrive Creative Labs](http://www.thrivecreativelabs.com) for setting up new websites in a timely manner. The aim is to update this package (core/module versions) on a monthly-ish basis.

*Content Type Defaults* is part of the MB Toolkit and can be [downloaded on GitHub](http://www.github.com/mburnette).