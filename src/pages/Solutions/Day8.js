import React, {useEffect, useState} from 'react';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        {title: "Tab 1", content: "Content 1"},
        {title: "Tab 2", content: "Content 2"},
        {title: "Tab 3", content: "Content 3"}
    ]
    return(
        <div>
            {tabs.map((tab, index)=>(
                <button key = {index} style = {{
                    fontStyle: activeTab===index?"italic": "normal"
                    }}
                    onClick={()=>setActiveTab(index)}
                >
                    {tab.title}
                </button>

            ))}
            <p>{tabs[activeTab].content}</p>
        </div>
    )
}

export default Tabs;