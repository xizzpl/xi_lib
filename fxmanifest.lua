fx_version 'cerulean'
games { 'gta5' }

author 'John Doe <j.doe@example.com>'
description 'Example resource'
version '1.0.0'

client_scripts {
    'client.lua',
    'config.lua'
}

lua54 'yes'

ui_page('html/index.html')

files {
    'html/*' 
}
