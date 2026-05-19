export const askGemini = async (req,res) => {

  try {

    const { message } = req.body;

    const lowerMessage = message.toLowerCase();

    let reply = "";

    if(lowerMessage.includes("fire")) {

      reply = `
🔥 FIRE EMERGENCY DETECTED

Immediate Actions:
- Evacuate building immediately
- Avoid elevators
- Stay low to avoid smoke
- Call fire emergency services
- Use nearest exit safely
      `;

    }

    else if(lowerMessage.includes("flood")) {

      reply = `
🌊 FLOOD ALERT DETECTED

Safety Guidance:
- Move to higher ground
- Avoid walking in flood water
- Disconnect electrical appliances
- Follow evacuation alerts
- Keep emergency kit ready
      `;

    }

    else if(lowerMessage.includes("gas")) {

      reply = `
⚠ GAS LEAK DETECTED

Emergency Guidance:
- Do NOT use electrical switches
- Open windows immediately
- Evacuate area safely
- Avoid flames or sparks
- Contact gas emergency services
      `;

    }

    else if(lowerMessage.includes("earthquake")) {

      reply = `
🌍 EARTHQUAKE ALERT

Safety Actions:
- Drop, Cover, Hold
- Stay away from windows
- Move to open area if safe
- Expect aftershocks
- Follow emergency broadcasts
      `;

    }

    else if(lowerMessage.includes("accident")) {

      reply = `
🚑 ACCIDENT DETECTED

Immediate Response:
- Check injuries carefully
- Call ambulance services
- Avoid moving seriously injured victims
- Keep crowd away
- Provide first aid if trained
      `;

    }

    else {

      reply = `
🤖 Emergency AI Assistant

Recommended Actions:
- Stay calm
- Contact emergency responders
- Move to safe location
- Share accurate information
- Follow official guidance
      `;

    }

    res.json({ reply });

  } catch (error) {

    res.status(500).json({
      reply:"Emergency AI unavailable",
    });

  }

};