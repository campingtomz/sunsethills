$(document).ready(buildingArrayMaker);
let buildingArray = [];

    
$(".building-wrapper").on('click', '.buttonUp', function () {
    for (item of buildingArray) {
        if (item.building === this.parentElement.id) {
            item.height += 1;
            console.log(item.height);
        }
    }
   
    floorMaker(this.parentElement.id, 1);
});

$(".building-wrapper").on('click', '.buttonDown', function () {
    for (item of buildingArray) {
        if (item.building === this.parentElement.id) {
            item.height -= 1;
            console.log(item.height);
        }
    }

 

    removeFloor(this.parentElement.id);
});

function removeFloor(buildingName) {
    let h1 = $(`#${buildingName}`).height();
    if (h1 > 130 ) {
        $(`#${buildingName}top`).next().remove();
        $(`#${buildingName}`).height(h1 - 30);
    }
}
function buildingArrayMaker() {
    for (let i = 0; i < 8; i++) {
        let buildingName = "building" + i;
        let buildingHeight = Math.floor(Math.random() * 8) + 1;
        let building = {
            building: buildingName,
            height: buildingHeight
        }
        buildingArray.push(building);
        buildingGenerator(buildingName, buildingHeight);
    }
}

function buildingGenerator(buildingName, height) {
    let bottomBuilding = Math.floor(Math.random() * 3) + 1;
    let topBuilding = Math.floor(Math.random() * 3) + 1;
    $('.building-wrapper').append(`<div  id="${buildingName}" class="building justify-content-center"><div>`);
    $(`#${buildingName}`).append(`
        <div class=" buttonUp center-con">
            <div class="round" style="transform:rotate(270deg)">
                <div  class="cta ">
                    <span class="arrow primera next "></span>
                    <span class="arrow segunda next "></span>
                </div>
            </div>
        </div>`);

    $(`#${buildingName}`).append(`
        <div value="test" class=" buttonDown center-con">
                <div value="test" class="round">
                    <div  class="cta ">
                        <span class="arrow primera next "></span>
                        <span class="arrow segunda next "></span>
                    </div>
                </div>
            </div>`);

    if (topBuilding === 1) {
        $(`#${buildingName}`).append(`<img id="${buildingName}top" class="buildingtop" src="../img/building1/building1top.png" style="display:inline-block" />`);
    }
    else if (topBuilding === 2) {
        $(`#${buildingName}`).append(`<img id="${buildingName}top" class="buildingtop" src="../img/building3/building3top.png" style="display:inline-block" />`);
    }
    else if (topBuilding === 3) {
        $(`#${buildingName}`).append(`<img id="${buildingName}top" class="buildingtop" src="../img/building4/building4top.png" style="display:inline-block" />`);
    }

    if (bottomBuilding === 1) {
        $(`#${buildingName}`).append(`<img id="${buildingName}bottom" class="buildingbottom" src="../img/building1/building1bottom.png" style="display:inline-block" />`);
    }
    else if (bottomBuilding === 2) {
        $(`#${buildingName}`).append(`<img id="${buildingName}bottom" class="buildingbottom" src="../img/building3/building3bottom.png" style="display:inline-block" />`);
    }
    else if (bottomBuilding === 3) {
        $(`#${buildingName}`).append(`<img id="${buildingName}bottom" class="buildingbottom" src="../img/building4/building4bottom.png" style="display:inline-block" />`);
    }
    floorMaker(buildingName, height);
}

function floorMaker(building,height) {
    for (let i = 0; i < height; i++) {
        setTimeout(() => {
            let h1 = $(`#${building}`).height();

            $(`#${building}`).height(h1 + 30);
            let midBuilding = Math.floor(Math.random() * 3) + 1;
            if (midBuilding === 1) {
                $(`#${building}top`).after((`<img id="${building}mid" class="buildingmid" src="../img/building1/building1mid.png" style="display: inline - block" />`));
            }
            else if (midBuilding === 2) {
                $(`#${building}top`).after((`<img id="${building}mid" class="buildingmid" src="../img/building3/building3mid.png" style="display: inline - block" />`));
            }
            else if (midBuilding === 3) {
                $(`#${building}top`).after((`<img id="${building}mid" class="buildingmid" src="../img/building4/building4mid.png" style="display: inline - block" />`));
            }
        }, 200 * i);
    }
}