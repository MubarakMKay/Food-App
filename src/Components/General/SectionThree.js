const SectionThree = () => {
    return ( 
        <div className="sectionThree">
            <div className="sectionThreeText">
                <h2>Get notified when we update!</h2>
                <p>Get notified when we add new items to our specials menu,<br />update our price list of have promos!</p>
            </div>
            <div className="sectionThreeLogin">
                <input type="email" name="email" id="sectionThreeLoginEmail" placeholder="myself@gmail.com"/>
                <input type="submit" value="Get notified" />
            </div>
        </div>
     );
}
 
export default SectionThree;