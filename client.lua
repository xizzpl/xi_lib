function Notify(type, title, text, duration)
    if duration ~= nil then     
        SendNUIMessage({
            type = type,
            title = title,
            text = text,
            duration = duration,
            playSound = Config.playSound
        })
    else 
        SendNUIMessage({
            type = type,
            title = title,
            text = text,
            playSound = Config.playSound
        })
    end
end


exports('Notify', Notify)
