import React from 'react';
import "./Plugimnes.css";

const Plugimnes= () => {
    return (
    <div className='pluginBackground'>
    <h1 className='headmp'>Manage Plugins</h1>
    <div className='pluginContainer'>
    



<table id="customers1">
  <tr>
    <th>NAME</th>
    <th>DESCRIPTION</th>
    <th>VERSION</th>
    <th>AUTHOR</th>
    <th>ENABLED</th>
    <th>ACTIONS</th>
  </tr>
  <tr>
  <td>shortlinks</td>
    <td>Create short links when sharing task URLs</td>
    <td>1.0.0</td>
    <td>Piero Toffanin</td>
    <td>False</td>
    <td className='buttoncontainer'>
    <div className='dis1'><button className='button111' >Disable</button></div>
    <div className='enb1'><button className='button111'>Enable</button></div>
    </td>
  </tr>
  <tr>
  <td>posm-gcpi	</td>
    <td>A plugin to create GCP files from images</td>
    <td>0.4.0</td>
    <td>Eric Brelsford, Piero Toffanin</td>
    <td>True</td>
    <td className='buttoncontainer'>
    <div className='dis1'><button className='button111'>Disable</button></div>
    <div className='enb1'><button className='button111'>Enable</button></div>
    </td>
  </tr>  <tr>
  <td>osm-quickedit	</td>
    <td>A plugin to add a button for quickly opening OpenStreetMap's iD editor and setup a TMS basemap.</td>
    <td>1.0.0</td>
    <td>Dan Joseph, Piero Toffanin</td>
    <td>False</td>
    <td className='buttoncontainer'>
    <div className='dis1'><button className='button111'>Disable</button></div>
    <div className='enb1'><button className='button111'>Enable</button></div>
    </td>
  </tr>  <tr>
  <td>openaerialmap</td>
    <td>A plugin to upload orthophotos to OpenAerialMap</td>
    <td>0.9.1</td>
    <td>Piero Toffanin</td>
    <td>False</td>
    <td className='buttoncontainer'>
    <div className='dis1'><button className='button111'>Disable</button></div>
    <div className='enb1'><button className='button111'>Enable</button></div>
    </td>
  </tr>  <tr>
  <td>measure	Compute</td>
    <td>volume, area and length measurements on Leaflet	</td>
    <td>1.0.0</td>
    <td>Abdelkoddouss Izem, Piero Toffanin</td>
    <td>True</td>
    <td className='buttoncontainer'>
    <div className='dis1'><button className='button111'>Disable</button></div>
    <div className='enb1'><button className='button111'>Enable</button></div>
    </td>
  </tr>  <tr>
  <td>lightning</td>
    <td>Sync accounts from webodm.net</td>
    <td>0.9.0</td>
    <td>Piero Toffanin</td>
    <td>True</td>
    <td className='buttoncontainer'>
    <div className='dis1'><button className='button111'>Disable</button></div>
    <div className='enb1'><button className='button111'>Enable</button></div>
    </td>
  </tr>  <tr>
  <td>shortlinks</td>
    <td>Create short links when sharing task URLs</td>
    <td>1.0.0</td>
    <td>Piero Toffanin</td>
    <td>False</td>
    <td className='buttoncontainer'>
    <div className='dis1'><button className='button111'>Disable</button></div>
    <div className='enb1'><button className='button111'>Enable</button></div>
    </td>
  </tr>  <tr>
  <td>fullscreen</td>
    <td>Add a fullscreen button to the 2D map view</td>
    <td>1.0.0</td>
    <td>Piero Toffanin</td>
    <td>True</td>
    <td className='buttoncontainer'>
    <div className='dis1'><button className='button111'>Disable</button></div>
    <div className='enb1'><button className='button111'>Enable</button></div>
    </td>
  </tr>  <tr>
  <td>elevationmap</td>
    <td>Calculate and draw an elevation map based on a task's DEMs</td>
    <td>1.0.0</td>
    <td>Nicolas Chamo</td>
    <td>False</td>
    <td className='buttoncontainer'>
    <div className='dis1'><button className='button111'>Disable</button></div>
    <div className='enb1'><button className='button111'>Enable</button></div>
    </td>
  </tr>
  <tr>
  <td>editshortlinks</td>
    <td>Create editable short links when sharing task URLs</td>
    <td>1.0.0</td>
    <td>Piero Toffanin</td>
    <td>False</td>
    <td className='buttoncontainer'>
    <div className='dis1'><button className='button111'>Disable</button></div>
    <div className='enb1'><button className='button111'>Enable</button></div>
    </td>
  </tr>
  <tr>
  <td>dronedb	Integrate </td>
    <td>WebODM with DroneDB: import images and share results</td>
    <td>0.0.1</td>
    <td>Luca Di Leo</td>
    <td>False</td>
    <td className='buttoncontainer'>
    <div className='dis1'><button className='button111'>Disable</button></div>
    <div className='enb1'><button className='button111'>Enable</button></div>
    </td>
  </tr>
  <tr>
  <td>diagnostic</td>
    <td>Display program version, memory and disk space usage statistics</td>
    <td>1.0.0</td>
    <td>Piero Toffanin</td>
    <td>True</td>
    <td className='buttoncontainer'>
    <div className='dis1'><button className='button111'>Disable</button></div>
    <div className='enb1'><button className='button111'>Enable</button></div>
    </td>
  </tr>
  <tr>
  <td>contours</td>
    <td>Compute, preview and export contours from DEMs</td>
    <td>1.0.0</td>
    <td>Piero Toffanin</td>
    <td>True</td>
    <td className='buttoncontainer'>
    <div className='dis1'><button className='button111'>Disable</button></div>
    <div className='enb1'><button className='button111'>Enable</button></div>
    </td>
  </tr>
  <tr>
  <td>cloudimport</td>
    <td>Import images from external sources directly </td>
    <td>1.0.1</td>
    <td>Nicolas Chamo</td>
    <td>False</td>
    <td className='buttoncontainer'>
    <div className='dis1'><button className='button111'>Disable</button></div>
    <div className='enb1'><button className='button111'>Enable</button></div>
    </td>
  </tr>
  <tr>
  <td>changedetection</td>
    <td>Detect changes between two different tasks in the same project.</td>
    <td>1.0.1</td>
    <td>Nicolas Chamo</td>
    <td>False</td>
    <td className='buttoncontainer'>
    <div className='dis1'><button className='button111'>Disable</button></div>
    <div className='enb1'><button className='button111'>Enable</button></div>
    </td>
  </tr>
</table>
</div>
</div>
   ) }

   export default Plugimnes;