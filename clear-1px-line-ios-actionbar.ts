var navigationBar = frame.topmost().ios.controller.navigationBar;   
    remove 1px line under actionbar     
    navigationBar.translucent = false; 
    page.ios.navigationController.navigationBar.setBackgroundImageForBarMetrics(new UIImage(), UIBarMetrics.UIBarMetricsDefault)
    page.ios.navigationController.navigationBar.shadowImage = new UIImage();
    remove 1px line upper searchbar
    page.getViewById("searchbar").ios.setBackgroundImageForBarPositionBarMetrics(new UIImage(),2,0);
    var Color = colorModule.Color;
    var color = new Color("#1a53ff");
    set color for background searchbar
    page.getViewById("searchbar").ios.backgroundColor = color.ios;