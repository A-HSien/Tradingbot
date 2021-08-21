import { observer } from "mobx-react";
import { layoutStore } from "src/stores/LayoutStore";
import { createClass } from "src/styles";



const Overlay = () => {
    if (!layoutStore.showOverlay)
        return <></>;

    return (
        <div className={createClass(
            'fixed', 'w-full', 'h-full',
            'bg-gray-900', 'bg-opacity-60',
            'flex', 'items-center', 'justify-center',
        )}>
            資料處理中
        </div>
    );
};

export default observer(Overlay);