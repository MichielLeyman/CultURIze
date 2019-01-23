![CulturizeLogo](https://github.com/PACKED-vzw/CultURIze/blob/master/static/assets/logo-culturize-klein.png)

This is the GitHub repo for Culturize.

## License
Copyright (c) 2019 PACKED vzw.

All content in this repository is released under the [CC-BY-SA License](https://creativecommons.org/licenses/by-sa/4.0/).
The code of the Culturize Desktop App is released under the [MIT License](https://opensource.org/licenses/MIT).
## About
CultURIze is a four-step process to make persistent URI's for collection items, using a spreadsheet to record persistent URI's, a desktop app to turn it in a .htaccess file, and a Githubrepo/CircleCI script to automate the configuration of an Apache webserver.

CultURIze is made for registrars, curators and managers of small to medium heritage collections. 

More information about inspiration, governance, and howto's for setting up a Culturize workflow are available on the [CultURIze Wiki](https://github.com/PACKED-vzw/CultURIze/wiki) 

## CultURIze relies on
* an Apache webserver
* a Github account
* a CircleCI account
* Electron
* Typescript

## Getting Started
* Define the domain and numbering [scheme](https://github.com/PACKED-vzw/CultURIze/wiki/Define-a-Persistent-URI-Scheme) for your persistent URIs.
* Set up an [(Apache) webserver](https://github.com/PACKED-vzw/CultURIze/wiki/Set-Up-a-Webserver).
* Set up a [(Github) repository](https://github.com/PACKED-vzw/CultURIze/wiki/Set-Up-a-Code-Repository) and link it to your webserver.
* Record the persistent URI’s in  a [spreadsheet](https://github.com/PACKED-vzw/CultURIze/wiki/Create-a-Spreadsheet). 
* Download and [install](https://github.com/PACKED-vzw/CultURIze/wiki/App-Installation-Instructions) the desktop application. Use it to turn your spreadsheet in an [server configuration file](App-Tutorial) and push it to your repository.

## Contributing
  * [Coding Style](doc/Style.md): Read this before contributing to the project.
  * [Bugs and Features idea list](doc/Possible%20Improvements.md)
  * [In-depth explanation of the internal flow of the desktop application](doc/pdf/flow.pdf)
  * Source code: the Source code for the HTML pages is contained in the [static](static/) folder, and the source code for the core logic in the [src](src/) folder. 
  
## Authors
  * OsoC 2018 team: Bert Schoovaerts, Pierre Van Houtryve, Marie Devos, Milena Vergara Santiago
  * OKBE: Brecht Van de Vyvere, Eveline Vlassenroot
  * PACKED: Bert Lemmens, Alina Saenko, Lode Scheers, Nastasia Vanderperren
  * Deuze: Maxime Deuze
## Acknowledgements
  * inspired by [w3id.org](http://w3id.org)

